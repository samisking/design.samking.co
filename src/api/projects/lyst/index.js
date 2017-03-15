const project = {
  slug: 'lyst',
  title: 'Lyst',
  subtitle: 'One of the worlds largest fashion aggregators',
  intro: 'Lyst is one of the biggest online fashion aggregators with over 11,000 designers & retailers and an inventory of millions.',
  link: {
    url: 'https://lyst.com',
    text: 'lyst.com'
  },
  cover: './images/cover.jpg',
  content: [
    {
      type: 'heading',
      level: 2,
      text: 'Where I fit in'
    },
    {
      type: 'paragraph',
      text: 'I joined as a designer as part of the web team where we worked towards increasing conversion and improving the discoverability of the huge inventory. I worked on a wide range of projects on the website including a header redesign, a product page redesign, editorial content, and homepage redesign.'
    },
    {
      type: 'image',
      src: './images/header-desktop.jpg',
      alt: 'Header Desktop'
    },
    {
      type: 'image',
      src: './images/header-mobile.jpg',
      alt: 'Header Mobile'
    },
    {
      type: 'image',
      src: './images/pdp.jpg',
      alt: 'Product pages'
    },
    {
      type: 'image',
      src: './images/pdp-v2.jpg',
      alt: 'Refined product pages'
    },
    {
      type: 'image',
      src: './images/sales-hub.jpg',
      alt: 'Sales Hub'
    },
    {
      type: 'image',
      src: './images/editorial.jpg',
      alt: 'Editorial content'
    },
    {
      type: 'image',
      src: './images/lysts.jpg',
      alt: 'Lysts'
    },
    {
      type: 'image',
      src: './images/type-pages.jpg',
      alt: 'Type Pages'
    },
    {
      type: 'image',
      src: './images/category-nav.jpg',
      alt: 'Category navigation'
    },
    {
      type: 'image',
      src: './images/homepage.jpg',
      alt: 'Homepage'
    },
    {
      type: 'heading',
      level: 2,
      text: 'Internal tools'
    },
    {
      type: 'paragraph',
      text: 'To improve the life of people working at Lyst, I worked on a couple of internal tools. I made a small tool for the editorial team (or anyone in the company) to crop and resize images for various places around the product. This was accompanied by a chrome extension to preview said images on the website.'
    },
    {
      type: 'image',
      src: './images/drop-crop-pop.jpg',
      alt: 'Drop Crop Pop',
      caption: 'Drop Crop & Pop'
    },
    {
      type: 'paragraph',
      text: 'I was also part of a small team tasked with building an internal dashboard for promoting content to various places on the site. We started by creating components for form elements and layout, then writing extensive unit tests. This paid off when it came to adding more dashboards to this project because of the reusability.'
    },
    {
      type: 'paragraph',
      text: 'We wanted this to be the sole place for all internal dashboards. We called it Lyst OS. There were quite a few existing dashboards, but a new one was in progress so it made sense to build it directly in Lyst OS. This was a dashboard for retailer promotions, which I worked on almost exclusively while the rest of the team continued work on the promoted content dashboard and the supporting backend.'
    },
    {
      type: 'paragraph',
      text: 'As far as I know, Lyst OS is still being worked on with new dashboards being added. Because of the reusability of components, it has apparently been very resilient and ‘stood the test of time’.'
    },
    {
      type: 'image',
      src: './images/promotions.jpg',
      alt: 'Lyst OS Promotions dashboard',
    },
    {
      type: 'image',
      src: './images/components.jpg',
      alt: 'Lyst OS form components',
      caption: 'Lyst OS Promotions dashboard & a whole host of form components'
    },
    {
      type: 'heading',
      level: 2,
      text: 'Marketing'
    },
    {
      type: 'paragraph',
      text: 'The design team also shared responsibility of working on marketing campaigns and social content. This meant I worked on some print collateral and even some poster campaigns that were used in Old St. station take overs, and fly posting in New York.'
    },
    {
      type: 'image',
      src: './images/oldst-takeover.jpg',
      alt: 'Old Street Takeover',
    },
    {
      type: 'image',
      src: './images/nyc-takeover.jpg',
      alt: 'NYC Takeover',
    }
  ]
};

module.exports = project;
