console.log('Starting app');

setTimeout (() => {
  console.log('Inside Callback');
}, 2000);

setTimeout(() => {
  console.log('Second Callback')
}, 3000);

console.log('Finish up');
