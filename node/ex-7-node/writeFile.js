const fs = require('fs')

fs.writeFile('file.txt', 'hello worlddddddd', 'utf8', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('file written')
    }
})