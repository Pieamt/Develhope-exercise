const isLogged = true;

function userIsLogged(isLogged) {
    return new Promise ((resolve, reject) => {
    if (isLogged == true) {
        resolve (Math.random())
    } else {
       reject (console.error("error"))
    }
})
}

function userDetails(num){
    return new Promise ((resolve,reject) => {
    if (num > 0.5) {
        resolve ('{ name: John, age :24 }')
    } else {
        reject (console.error('small number'))
    }
})
}

userIsLogged(isLogged)
  .then(userDetails)
  .then((val) => console.log(val))
  .catch((err) => console.log(err))