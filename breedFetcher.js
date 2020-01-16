const request = require('request');

const fetchBreedDescription = function(requestedBreed, callback) {
  let desc = null;
  request(`https://api.thecatapi.com/v1/breeds/search?q=${requestedBreed}`, (error, response, body) => {
    if (error) {
      callback(error, desc);
    }
    if (body !== "[]") {
      let parsedBody = JSON.parse(body);
      desc = parsedBody[0].description;
      callback(null, desc);
    } else {
      callback(`the requested breed is not found. :(`, desc);
    }
  });
};

module.exports = { fetchBreedDescription };