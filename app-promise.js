const yargs = require('yargs');
const axios = require('axios');
const argv = yargs
 .options({
   a: {
     demand: true,
     alias: 'address',
     describe: 'Address to fetch weather for',
     string: true
   }
  })
  .help()
  .alias('help','h')
  .argv;

var encodeAddress = encodeURIComponent(argv.address);
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`;

axios.get(geocodeURL).then((response) => {
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find Address');
  }

  var latitude = response.data.results[0].geometry.location.lat;
  var longitude = response.data.results[0].geometry.location.lng;
  var weatherURL = `https://api.darksky.net/forecast/c2a1668a0f71b939a168bd0efbc943cc/${latitude},${longitude}`;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherURL);
}).then( (response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`It's currrently ${temperature}. It feels like ${apparentTemperature}.`)
}

).catch((e) => {
 if(e.code === 'ENOTFOUND') {
        console.log('Cannot connect to API');
 } else {
   console.log(e.message);
 }
})
