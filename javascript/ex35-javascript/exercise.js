const printHello = () => {console.log('Hello')}

function repeatHello(cb) {
  setInterval(cb, 1000);
}

repeatHello(printHello);

