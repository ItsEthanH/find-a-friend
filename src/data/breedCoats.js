// an object containing all the possible coat options for each animal

// the key is the petfinder identifier for that animal type. the value is an object
// containing the coat options, and the properly formatted name for display around the Filter component

const typeCoats = {
  dog: {
    name: 'Dog',
    coats: { hairless: false, short: false, medium: false, long: false, wire: false, curly: false },
  },
  cat: {
    name: 'Cat',
    coats: { hairless: false, short: false, medium: false, long: false },
  },
  rabbit: {
    name: 'Rabbit',
    coats: { short: false, long: false },
  },
  'small-furry': {
    name: 'Small & Furry',
    coats: { hairless: false, short: false, long: false },
  },
  horse: {
    name: 'Horse',
    coats: {},
  },
  bird: {
    name: 'Bird',
    coats: {},
  },
  'scales-fins-other': {
    name: 'Scales, Fins & Other',
    coats: {},
  },
  barnyard: {
    name: 'Barnyard',
    coats: { short: false, long: false },
  },
};

export default typeCoats;
