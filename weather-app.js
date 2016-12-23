request({
  url: 'https://api.darksky.net/forecast/c2a1668a0f71b939a168bd0efbc943cc/19.222074,73.0788956999999',
  json: true
},(error, response, body) => {
  if (error){
    console.log('Unable to connect to forcast server');
  }
  else if (response.statusCode === 400) {
      console.log('Unable to fetch weather');
  } else if (response.statusCode === 200) {
      console.log(`Current Temprature: ${body.currently.temperature}`);
  }
});
