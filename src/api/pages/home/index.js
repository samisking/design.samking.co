const data = {
  title: 'Sam King',
  slug: 'home',
  content: [
    {
      type: 'quote',
      text: 'I\'m a Designer with ~6 years experience working on the web and for native app environments. Lately I\'ve become more passionate about front-end and how you can scale design for the web.'
    },
    {
      type: 'paragraph',
      text: [
        {
          type: 'text',
          text: 'This website serves as a temporary portfolio with my last two years of work while a new site is in progress. You can email at '
        },
        {
          type: 'link',
          text: 'mail@samking.co',
          url: 'mailto:mail@samking.co'
        },
        {
          type: 'text',
          text: ' or check out my '
        },
        {
          type: 'link',
          text: 'GitHub',
          url: 'https://github.com/samisking'
        },
        {
          type: 'text',
          text: '.'
        }
      ]
    }
  ],
  experience: [
    {
      date: '2017–Present',
      role: 'Designer',
      company: 'Deliveroo',
      points: [
        'Deliveroo delivers the food from restaurants you love, straight to your door.',
        'I\'m working within the restaurants team to improve the Deliveroo experience for our restaurant partners.'
      ]
    },
    {
      date: '2016–2017',
      role: 'Designer',
      company: 'MutualArt',
      points: [
        'MutualArt aims to connect collectors of art with buyers/sellers along with providing in depth art market analysis.',
        'I worked on cleaning up the site after an agency build.',
        'I also worked on an exhibition finding app for iOS.'
      ]
    },
    {
      date: '2014–2016',
      role: 'Designer',
      company: 'Lyst',
      points: [
        'Lyst is one of the biggest online fashion aggregators with an enormous inventory and a universal checkout experience.',
        'I worked in the web team improving conversion and the discoverability of products.',
        'I also worked on print & marketing campaigns (posters, shooting photos for social).',
        'Shortly before leaving, I was part of a 4 man team working on a substantial internal dashboard project allowing the site to support retailer promotions, promoted content and much more.'
      ]
    },
    {
      date: '2012–2014',
      role: 'Designer',
      company: 'RetailMeNot, .Inc',
      points: [
        'RetailMeNot is product that helps people save money at their favourite brands.',
        'I worked mainly on the website and app, re-designing it for iOS 7 and Android.',
        'I also produced various print collateral.'
      ]
    },
    {
      date: '2011–2012',
      role: 'Designer & Dev',
      company: 'Solutions',
      points: [
        'Solutions was a small local agency where I worked on sites for local businesses, NHS trusts, and The Charity Commission.'
      ]
    },
    {
      date: '2010–2012',
      role: 'Freelance',
      points: [
        'Shooting photos for BMX publications and small fashion companies.',
        'Designing and building websites for local businesses.'
      ]
    }
  ]
};

module.exports = data;
