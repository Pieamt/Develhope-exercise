const isLogged = true;

function userIsLogged(isLogged) {
    return new Promise ((resolve, reject) => {
    if (isLogged == true) {
        resolve (Math.random())
    } else {
       reject (new Error ("error"))
    }
})
}

function userDetails(num){
    return new Promise ((resolve,reject) => {
    if (num > 0.5) {
        resolve ('{ name: John, age :24 }')
    } else {
        reject (new Error('small number'))
    }
})
}

userIsLogged(isLogged)
  .then(userDetails)
  .then((val) => console.log(val))
  .catch((err) => console.log(err))
  .finally(console.log('complete'))