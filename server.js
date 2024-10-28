console.log("Hey")
// console.log(global)

const os = require('os')
const path = require('path')

console.log(os.type())
console.log(os.version())
console.log(os.homedir())

console.log(__dirname);
console.log(__filename);
console.log("-----------")

console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log("-----------")
console.log(path.parse(__filename))



const math = require('./math.js')
console.log(math.add(3,3))
console.log(math.sub(3,3))
console.log(math.mul(3,3))
console.log(math.div(3,3))


