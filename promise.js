var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve (a+b);
      } else {
        reject('Arguments must be Numbers');
      }
     },2500)
  });
};

asyncAdd(5,7).then ((message) => {
  console.log(message)
}, (errorMessage) => {
  console.log(errorMessage);
})

/*var somePromise = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve('Hey, It worked');
  }, 2500);
});

somePromise.then((message) => {
   console.log('Success: ', message);
}, (errorMessage) => {
   console.log('Error: ', errorMessage);
})
*/
