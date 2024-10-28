const fs = require('fs')
const path = require('path')
const rs = fs.createReadStream(path.join(__dirname, 'files', 'bigfile.txt'), {encoding:'utf-8'})
const ws = fs.createWriteStream(path.join(__dirname, 'files', 'newbigfile.txt'))

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk)
// })

// same as above code

rs.pipe(ws)
console.log("write completed")