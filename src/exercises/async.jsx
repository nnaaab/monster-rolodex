const myPromise = new Promise ((resolve, reject) => {
      if(false) {
            setTimeout(() => {
                  resolve("I have succeeded");
            },1000);
      } else{
            reject('I have failed');
      }
})

myPromise
      .then(value => value + '!!!')
      .then(newValue => console.log(newVlue))
      .catch(rejectValue => console.log(rejectValue));

//myPromise
//      .then(value => console.log(value))
//      .catch(rejectValue => console.log(rejectValue));