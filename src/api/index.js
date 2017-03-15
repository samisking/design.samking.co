const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const mkdirp = require('mkdirp');

const pages = require('./pages');
const projects = require('./projects');

const apiDir = './build/api';

const generateFileName = file => {
  const ext = path.extname(file);
  const base = path.basename(file, ext);
  const uuid = Math.random().toString(36).substr(2, 8);
  return `${base}.${uuid}${ext}`;
};

const processImage = async (file, outputDir) => {
  const sizes = [
    {
      width: 2256,
      quality: 70
    },
    {
      width: 1128,
      quality: 60
    },
    {
      width: 768,
      quality: 60
    }
  ];

  const resize = sizes.map(size =>
    new Promise((resolve, reject) => {
      const outputName = generateFileName(file);
      const dest = path.resolve(outputDir, outputName);

      console.log(`Resizing: ${outputName}`);

      sharp(file)
        .resize(size.width, size.width)
        .max()
        .withoutEnlargement()
        .jpeg({ quality: size.quality || 50, progressive: true })
        .toFile(dest, (writeError, info) => {
          if (writeError) reject(new Error(`Resizing ${file}`));
          resolve({
            size,
            url: outputName,
            width: info.width,
            height: info.height
          });
        });
    })
  );

  return Promise.all(resize);
};

const writeToAPI = (data, subDir = '', filename) => {
  console.log(`Writing: ${subDir ? `/${subDir}` : ''}/${filename}.json`);

  // Make sure the api directory exists before writing JSON
  mkdirp.sync(path.resolve(apiDir, subDir));

  const dest = path.resolve(apiDir, subDir, `${filename}.json`);
  fs.writeFileSync(dest, JSON.stringify(data));
};

const run = async () => {
  const slimProjects = [];

  // Static pages
  for (const page of Object.keys(pages)) {
    // Write the content to the api
    writeToAPI(pages[page], 'pages', page);
  }

  // Project pages with image resizing
  for (const project of Object.keys(projects)) {
    // Make sure the project directory exists before resizing images
    mkdirp.sync(path.resolve(apiDir, 'images', project));

    const { cover, content } = projects[project];
    const projectCtx = path.resolve('src/api/projects', project);
    const outputDir = path.resolve(apiDir, 'images', project);

    // Process the cover image
    let newCover = cover;
    if (cover && cover.startsWith('./images')) {
      const sizes = await processImage(path.resolve(projectCtx, cover), outputDir);

      // Overwrite the image with resized data
      newCover = {
        ratio: sizes[0].height / sizes[0].width,
        sizes: sizes.map(size => ([size.width, `/api/images/${project}/${size.url}`]))
      };
    }

    // Process the images in the project content
    let newContent = content;
    for (const contentItem of newContent) {
      if (contentItem.type === 'image' && contentItem.src.startsWith('./images')) {
        const sizes = await processImage(path.resolve(projectCtx, contentItem.src), outputDir);

        // Overwrite the image with resized data
        contentItem.src = {
          ratio: sizes[0].height / sizes[0].width,
          sizes: sizes.map(size => ([size.width, `/api/images/${project}/${size.url}`]))
        };
      }
    }

    // Create a new project with the resized data
    const newProject = Object.assign({}, projects[project], {
      cover: newCover,
      content: newContent
    });

    // And write it to the API
    writeToAPI(newProject, 'projects', project);

    const slimProject = Object.assign({}, newProject);
    delete slimProject.content;
    delete slimProject.intro;
    delete slimProject.link;

    slimProjects.push(slimProject);
  }

  writeToAPI(slimProjects, 'projects', 'index');
};

// Make sure the `api/` folder exists inside the build folder
mkdirp.sync(path.resolve(apiDir));

// Run the script
run().then(() => console.log('Successfully created API data.'));
