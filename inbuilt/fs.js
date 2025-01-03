let fs = require('fs');

// fs.writeFile('mycode.txt','We are using express',(err)=>{
//     if(err) throw err;
//     console.log('Task Done')
// })

// fs.appendFile('myText.txt','Code from Node FS \n',(err) => {
//     if(err) throw err;
//     console.log('File appended')
// })

// fs.readFiles('myText.txt','utf-8',(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// })


// readFileSync() will read the file in a synchronous order but readFile may read the file concurrently and mix up the data.

// let data  = fs.readFileSync('city.json',{encoding:'utf-8',flag:'r'})
// console.log(data)

// let data1  = fs.readFileSync('myText.txt',{encoding:'utf-8',flag:'r'})
// console.log(data1)



// Here in below code if we don't hnadle error then it will show the output file deleted even if the file does not exist so we should always handle error.

// fs.unlink('mycode.txt',(err)=>{
//     if(err) throw err;
//     console.log('file deleted')
// })

fs.rename('myText.txt','myFile.xml',(err)=>{
    if(err) throw err;
    console.log('file renamed')
})
