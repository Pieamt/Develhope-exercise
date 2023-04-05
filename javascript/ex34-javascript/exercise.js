const printHello = () => {
    console.log('Hello')
}

const printAsyncsName = (cb, string) => {
    setTimeout(cb, 1000);
    setTimeout(() => {console.log(string)}, 2000);
}

printAsyncsName(printHello, 'Pietro')

