const { fetchBreedDescription } = require('./breedFetcher');

const requestedBreed = process.argv[2].slice(0,3);

fetchBreedDescription(requestedBreed, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});