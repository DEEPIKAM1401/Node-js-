const fs = require('fs')

if(fs.existsSync('./new'))
{
    // fs.mkdir('./new', (err)
    fs.rmdir('./new', (err) =>{
    if(err) throw err
    console.log('Directory deleted')
})
}
else
{
    fs.mkdir('./new', (err) =>{
        if(err) throw err
        console.log('Directory created')
    })

}



//exit on uncaught errors

process.on('uncaughtException', err=>
    {
        console.error(`There was an uncaught error${err}`)
        process.exit(1)
    }
    )