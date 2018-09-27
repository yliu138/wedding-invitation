const gallery = [ // galley image list
  // require('./Image/gallery/1.jpeg'),
];

export default {
  global: {
    googleMapAPIKey: 'AIzaSyCmTEoRqSDipsSYFAu5BWajRTDbSA0OQ7w',
    comment: {
      livere: {
        enable: true, // if false, not rendering livere comment component
        service: 'city',
        uid: 'MTAyMC8yNTYzNi8yMjMy',
      },
      facebook: {
        enable: false, // if false, not rendering facebook comment component
        appId: '1535680996513864',
      },
    },
  },
  title: 'Wedding Invitation', // recomanded English
  wedding: {
    place: {
      name: 'St Michael\'s Uniting Church',
      address: '120 Collins St, Melbourne VIC 3000',
      latitude: -37.8142665,
      longitude: 144.9696592,
    },
    at: '30-09-2018 14:00',
  },
  bridal: {
    name: 'Cindy',
    image: require('./Image/bridal.jpeg'),
    phone: '+61430055087',
    facebook: false, // if false, not showing facebook icon
    father: '',
    mother: '',
    position: ''
  },
  groom: {
    name: 'Leo',
    image: require('./Image/groom.jpeg'),
    phone: '+61423226733',
    facebook: false,
    father: '',
    mother: '',
    position: '',
  },
  image: {
    header: require('./Image/process.jpeg'),
    gallery: gallery.map(item => ({
      original: item,
      thumbnail: item,
    })),
  },
};
