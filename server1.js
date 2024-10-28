// import { readFile } from 'node:fs';

// const fs = require('fs')
const path = require('path')
const fsPromises = require('fs').promises


// fs.readFile(path.join(__dirname, 'files', 'subscribe.txt'), 'utf8', (err, data)=>
// {
//     if (err) throw err
//         console.log(data)
// });

const fileOps = async() => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname, 'files','start.txt'), 'utf-8')
        console.log(data)

        await fsPromises.writeFile(path.join(__dirname, 'files', 'subscribe.txt'), 'Hi Deepika How are u?')
        console.log('Write complete')

        await fsPromises.appendFile(path.join(__dirname, 'files', 'subscribe.txt'), '\n\nYou are good')
        console.log('append success')

        await fsPromises.rename(path.join(__dirname, 'files', 'subscribe.txt'),  path.join(__dirname, 'files', 'thanks.txt'))
        console.log('rename complete')
        
        await fsPromises.unlink(path.join(__dirname, 'files', 'start.txt'))
    }
    catch(err){
        console.error(err)
    }
}

fileOps()
// fs.writeFile(path.join(__dirname, 'files', 'subscribe.txt'), 'Hi Deepika How are u?', (err)=>
// {
//     if (err) throw err
//         console.log('Write complete')
//         fs.appendFile(path.join(__dirname, 'files', 'subscribe.txt'), '\n\nYou are good', (err)=>
//             {
//                 if (err) throw err
//                     console.log('Append complete')
//             })

//             fs.rename(path.join(__dirname, 'files', 'subscribe.txt'),  path.join(__dirname, 'files', 'thanks.txt'), (err)=>
//                 {
//                     if (err) throw err
//                         console.log('renamed complete')
//                 })
// })

    


//exit on uncaught errors

process.on('uncaughtException', err=>
{
    console.error(`There was an uncaught error:${err}`)
    process.exit(1)
}
)
