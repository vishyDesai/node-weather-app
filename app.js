const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather =  require('./weather/weather');

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

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(results.address);
    weather.getWeather(results.latitude,results.latitude, (errorMessage, weatherResults) => {
      if (errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}.`);
      }
    });
  }
});
//lat, lon, callback
//https://api.darksky.net/forecast/c2a1668a0f71b939a168bd0efbc943cc/19.222074,73.0788956999999
//c2a1668a0f71b939a168bd0efbc943cc
