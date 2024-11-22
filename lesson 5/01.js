const fs = require('fs')

// read json file

const data = fs.readFileSync('./d_05/j_1.json', {encoding: 'utf8'})
// console.log(data)
let dataObj = JSON.parse(data)
console.log(dataObj)
