const request = require('request');
const input = process.argv.slice(2);
const requestedBreed = input[0].slice(0,3);

request(`https://api.thecatapi.com/v1/breeds/search?q=${requestedBreed}`, (error, response, body) => {
  if (error) {
    return console.log(`Error: `, error);
  }
  if (!body.length) {
    const data = JSON.parse(body);
    console.log(data[0].description);
  } else {
    console.log(`the requested breed is not found. :(`);
  }
});