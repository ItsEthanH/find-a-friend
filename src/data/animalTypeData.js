import dog from '../assets/images/animals/dog.jpg';
import cat from '../assets/images/animals/cat.jpg';
import rabbit from '../assets/images/animals/rabbit.jpg';
import small from '../assets/images/animals/small-furry.jpg';
import horse from '../assets/images/animals/horse.jpg';
import bird from '../assets/images/animals/bird.jpg';
import scales from '../assets/images/animals/scales.jpg';
import barnyard from '../assets/images/animals/barnyard.jpg';

// an object containing all the possible coat options for each animal

// the key is the petfinder identifier for that animal type. the value is an object
// containing the coat options, an image, and the properly formatted name for display around the Filter component

const animalTypeData = {
  dog: {
    name: 'Dog',
    coats: { hairless: false, short: false, medium: false, long: false, wire: false, curly: false },
    image: dog,
  },
  cat: {
    name: 'Cat',
    coats: { hairless: false, short: false, medium: false, long: false },
    image: cat,
  },
  rabbit: {
    name: 'Rabbit',
    coats: { short: false, long: false },
    image: rabbit,
  },
  'small-furry': {
    name: 'Small & Furry',
    coats: { hairless: false, short: false, long: false },
    image: small,
  },
  horse: {
    name: 'Horse',
    coats: {},
    image: horse,
  },
  bird: {
    name: 'Bird',
    coats: {},
    image: bird,
  },
  'scales-fins-other': {
    name: 'Scales, Fins & Other',
    coats: {},
    image: scales,
  },
  barnyard: {
    name: 'Barnyard',
    coats: { short: false, long: false },
    image: barnyard,
  },
};

export default animalTypeData;
