const project = {
  slug: 'sandbox',
  title: 'Sandbox',
  subtitle: 'Learning by making products for myself',
  intro: 'In my spare time, I like to make little products for myself. Usually they\'re just for learning, sometimes they\'re useful! Here\'s a couple of things I\'ve made but not released in the last 18 months or so.',
  cover: './images/cover.jpg',
  content: [
    {
      type: 'heading',
      level: 2,
      text: 'Habits'
    },
    {
      type: 'paragraph',
      text: 'I wanted to start forming better habits, but most habit trackers are either crazy complicated, or far too limiting in what you can track. I figured I mostly had two types of goals; amount based, and time based. I made this little app around those two types. You either increment a counter, or start/stop a timer.'
    },
    {
      type: 'image',
      src: './images/habits-1.jpg',
      alt: 'Habits App'
    },
    {
      type: 'image',
      src: './images/habits-2.jpg',
      alt: 'Habits App flows',
      caption: 'The whole app and “add new” flow'
    },
    {
      type: 'image',
      src: './images/habits-3.jpg',
      alt: 'Habits App concepts',
      caption: 'Alternate versions'
    },
    {
      type: 'paragraph',
      text: 'Having daily and weekly goals also gave me flexibility when ramping up to a new habit, instead of setting ridiculous goals right off the bat. I also liked the idea of keeping a tab on streaks to reinforce positive behaviour, but it was hard to do without making myself feel bad about missing a day.'
    },
    {
      type: 'heading',
      level: 2,
      text: 'Spot list'
    },
    {
      type: 'paragraph',
      text: [
        {
          type: 'text',
          text: 'When I travel, I usually have a huge list of things I want to see. I wanted a nice way of keeping track of all the places I planned on visiting, and what I actually got round to doing. I built a very basic version on the plane to New York using Underscore templates. When I got home, I improved the design, but never got round to building the newer version. I also took a lot of inspiration from '
        },
        {
          type: 'link',
          text: 'Rizon',
          url: '/rizon'
        },
        {
          type: 'text',
          text: ' in terms of colour palette and overall style.'
        }
      ]
    },
    {
      type: 'image',
      src: './images/spots-1.jpg',
      alt: 'Spot list that was built on the plane',
      caption: 'The version that I made on the plane and used for my trip'
    },
    {
      type: 'image',
      src: './images/spots-2.jpg',
      alt: 'First redesign of the spot list app'
    },
    {
      type: 'image',
      src: './images/spots-3.jpg',
      alt: 'Second redesign of the spot list app'
    },
    {
      type: 'image',
      src: './images/spots-4.jpg',
      alt: 'Refresh of the spot list app',
      caption: 'More refined versions of the app design'
    },
    {
      type: 'heading',
      level: 2,
      text: 'Note keeper'
    },
    {
      type: 'paragraph',
      text: 'Most note apps just drop you in to your list of notes, but I found myself constantly adding new ones instead of viewing old ones. I made this simple app to add new notes quickly. You\'re always dropped into the new note screen instead. I also wanted a way to tag notes with just hashtags for easier organisation.'
    },
    {
      type: 'image',
      src: './images/notekeeper-1.jpg',
      alt: 'Notekeeper app - new note'
    },
    {
      type: 'image',
      src: './images/notekeeper-2.jpg',
      alt: 'Notekeeper app - all notes and filters'
    }
  ]
};

module.exports = project;
