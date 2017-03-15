const project = {
  slug: 'rizon',
  title: 'Rizon',
  subtitle: 'A golden hour calculator for iPhone',
  intro: 'Figuring out when to take photos outdoors can be a real nightmare. Rizon is an app that alerts you when Golden Hour is approaching so you never miss out on that perfect light. It\'s currently available on the App Store and has had over 7.7k downloads since August 2015.',
  link: {
    url: 'https://rizonapp.co',
    text: 'rizonapp.co'
  },
  cover: './images/cover.jpg',
  content: [
    {
      type: 'heading',
      level: 2,
      text: 'The idea'
    },
    {
      type: 'paragraph',
      text: 'I had the idea for Rizon in a small book store in New York. I saw a calendar with beautiful illustrations of sun and moon phases when I remembered how frustrating it was finding the best time to take photos outdoors. There were a few online tools, but they were all clunky and displayed too much information. I wanted to change that, taking inspiration from the calendar I\'d seen in New York. I did some sketches on the flight home and started designing the next day.'
    },
    {
      type: 'image',
      src: './images/inspiration.jpg',
      alt: 'Ideas & Inspiration',
      caption: 'Ideas & inspiration'
    },
    {
      type: 'image',
      src: './images/first-designs.jpg',
      alt: 'First Designs',
      caption: 'First pass of screens after sketches'
    },
    {
      type: 'paragraph',
      text: 'I built a simple prototype as a web app, but soon realised there were things missing that you couldn\'t do without going native. Push notifications were very hard to work with in 2014 and monetisation was also tricky as I didn\'t want to rely on ad revenue.'
    },
    {
      type: 'paragraph',
      text: 'Looking back on the first set of mockups, there wasn\'t anything that users couldn\'t get by going to an existing tool. That\'s where the idea for notifications came from. I knew I had to simplify the interface too so I made the main circle interactive. By rotating the circle, you could access the information for that moment.'
    },
    {
      type: 'image',
      src: './images/prototype.jpg',
      alt: 'Web Prototype',
      caption: 'Some screens from the web prototype'
    },
    {
      type: 'heading',
      level: 2,
      text: 'The build process & design improvements'
    },
    {
      type: 'paragraph',
      text: 'I had a stab at making this version as a native iOS app. Despite trying a few courses, Objective C was quite tricky for me to pick up. If I wanted Rizon to be feature full, I needed some help. I found a developer who was willing to work on Rizon in exchange for some future design work on one of his ideas.'
    },
    {
      type: 'paragraph',
      text: 'Malolan was in Boston, and I was in London so the time difference was difficult at first, but it worked out OK in the end. I could update designs in the evening so he could work on them over night. Using Slack meant he could leave any questions, and I could answer when I woke up in the morning. To keep conversations focused, we had specific channels for things like animations, notifications, user feedback.'
    },
    {
      type: 'paragraph',
      text: 'When building the interface, we came up on a few problems. I hadn\'t put much thought into 12/24hr for example, or can we do anything to prime the users permission for location? I went back into iterative design mode with Malolan and the app changed again.'
    },
    {
      type: 'image',
      src: './images/style-guide.jpg',
      alt: 'Rizon style guide'
    },
    {
      type: 'image',
      src: './images/design-improvements-1.jpg',
      alt: 'Design improvements'
    },
    {
      type: 'image',
      src: './images/design-improvements-2.jpg',
      alt: 'Design improvements'
    },
    {
      type: 'image',
      src: './images/design-improvements-3.jpg',
      alt: 'Spec sheets',
      caption: 'Spec sheet before we discovered zeplin.io 😆'
    },
    {
      type: 'heading',
      level: 2,
      text: 'Marketing & the Beta'
    },
    {
      type: 'paragraph',
      text: 'Once we had the main functionality working, we went into beta. I shot some photos using design mockups so people could get an idea of what the app would do. Then I built a simple website for the app to capture emails for beta testing, and also get a general idea of interest.'
    },
    {
      type: 'image',
      src: './images/photos.jpg',
      alt: 'Rizon photography'
    },
    {
      type: 'image',
      src: './images/website-1.jpg',
      alt: 'Rizon website'
    },
    {
      type: 'image',
      src: './images/website-2.jpg',
      alt: 'Rizon website'
    },
    {
      type: 'image',
      src: './images/website-3.jpg',
      alt: 'Rizon website'
    },
    {
      type: 'image',
      src: './images/website-4.jpg',
      alt: 'Rizon website',
      caption: 'Marketing site after launch with the sign up CTA\'s replaced with download CTA\'s'
    },
    {
      type: 'paragraph',
      text: 'We posted the site around a few places; photography websites, forums, and a few design sites too. In the first week we had a little over 700 people signed up for the beta. We split the 700 into smaller chunks to get better feedback. Most of the feedback was fluffy, but we noticed some common themes. We also got a lot of feature requests for things we\'d never thought about.'
    },
    {
      type: 'paragraph',
      text: 'Unfortunately it was only a project we could work on during evenings and weekends so things had to wait. We had a Trello board full of user requests and things we were actually going to ship. We prioritised what we\'d ship first and focused on getting it out to the world.'
    },
    {
      type: 'heading',
      level: 2,
      text: 'Going Live'
    },
    {
      type: 'paragraph',
      text: 'We wanted users to be able to use Rizon no matter where they were in the world. The first version we shipped had saved locations, offline locations, and reminders.'
    },
    {
      type: 'paragraph',
      text: [
        {
          type: 'text',
          text: 'Then was the mammoth task of getting screenshots and preparing App Store assets. Luckily we could automate most of this with a '
        },
        {
          type: 'link',
          text: 'sketch plugin',
          url: 'https://github.com/preciousforever/sketch-data-populator'
        },
        {
          type: 'text',
          text: ' and some open source tools. We used '
        },
        {
          type: 'link',
          text: 'Fastlane Snapshot',
          url: 'https://github.com/fastlane/fastlane/tree/master/snapshot'
        },
        {
          type: 'text',
          text: ' to generate screenshots at different device sizes. I generated some JSON for the Sketch plugin to use to replace text. I also created a large Sketch file with placeholders for the JSON replacement. This made generating screenshots for new versions take around 15 minutes altogether.'
        }
      ]
    },
    {
      type: 'image',
      src: './images/app-store-1.jpg',
      alt: 'Asset prep for the App Store'
    },
    {
      type: 'image',
      src: './images/app-store-2.jpg',
      alt: 'Asset prep for the App Store'
    },
    {
      type: 'image',
      src: './images/app-store-3.jpg',
      alt: 'Asset prep for the App Store'
    },
    {
      type: 'image',
      src: './images/social.jpg',
      alt: 'Some campaigns for social',
      caption: 'Some small campaign images for social'
    },
    {
      type: 'paragraph',
      text: 'We also planned to launch on Product Hunt to get a bit of extra visibility. I\'m glad we did as we got featured on the front page, and held second spot for the entire day!'
    },
    {
      type: 'paragraph',
      text: 'After the first version went live, Apple asked us for some promotional artwork. I got rather excited as I knew this meant we were in line to be featured somewhere on the App Store. I submitted the artwork and spent the next week checking like a maniac. Nothing came of it until around a month later where Rizon was featured in the Photo and Video category. Our downloads boomed a little, but nothing crazy. Rizon has been featured in the Photo and Video category pretty much all the time since then. We also got featured a few times on the home screen of the App Store.'
    },
    {
      type: 'image',
      src: './images/featured.jpg',
      alt: 'Featured placements on the App Store',
      caption: 'Featured placements on the App Store'
    },
    {
      type: 'heading',
      level: 2,
      text: 'Future plans'
    },
    {
      type: 'paragraph',
      text: 'We\'re not currently working on Rizon as we both have little free time, but this hasn\'t stopped me updating designs whenever I do have the time. Hopefully we\'ll get to build all the features users requested.'
    },
    {
      type: 'image',
      src: './images/future-plans.jpg',
      alt: 'Future plans for Rizon'
    },
    {
      type: 'heading',
      level: 2,
      text: 'A great learning experience'
    },
    {
      type: 'paragraph',
      text: 'I\'ve learnt a lot about what it takes to launch an app. I never realised how much work goes into managing a beta, marketing, and even getting things ready for the App Store. Working with a remote developer has been a great challenge, and it\'s helped me learn a little about AutoLayout and Objective-C. Overall I\'ve loved working on Rizon despite it just being a small side project.'
    }
  ]
};

module.exports = project;
