const fs = require('fs')

// read

// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if(err) {
//         console.log(err)
//     }
//     console.log(data.toString())
// })

// console.log("fs async")


// write

// fs.writeFile('./docs/blog1.txt', 'hello, world!', () => {
//     console.log('file was written!')
// })

// fs.writeFile('./docs/blog2.txt', 'hello, again!', () => {
//     console.log('file was written!')
// })

// directories

// if(!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if(err) {
//             console.log(err)
//         }
//         console.log("assets created!")
//     })
// } else {
//     fs.rmdir('./assets', (err) => {
//         if(err) {
//             console.log(err)
//         }
//         console.log("assets deleted")
//     })
// }

// delete files
if(fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err)
        }
        console.log("deleted!")
    })
}