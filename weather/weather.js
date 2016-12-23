const request = require('request');

var getWeather = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/c2a1668a0f71b939a168bd0efbc943cc/${latitude},${longitude}`,
    json: true
  },(error, response, body) => {
    if (error){
      //console.log('Unable to connect to forcast server');
      callback('Unable to connect to forecast server',undefined);
    }
    else if (response.statusCode === 400) {
        callback('Unable to fetch weather', undefined);
    } else if (response.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        })
        //callback(undefined,`Current Temprature is: ${body.currently.temperature}`);
    }
  });
};

module.exports.getWeather = getWeather;
