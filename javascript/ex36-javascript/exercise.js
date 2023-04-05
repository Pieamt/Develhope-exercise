const printHello = () => {console.log('Hello')}

function repeatHello(cb) {
  const interval = setInterval(cb, 1000);
  setTimeout(() => {clearInterval(interval),
                    console.log('stop')}, 5000)
}

repeatHello(printHello);
