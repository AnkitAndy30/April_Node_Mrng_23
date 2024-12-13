let fs = require('fs');
let http = require('http');

let server = http.createServer(function(req, res){
    //read file witj fs
    fs.readFile('city.json','utf-8',function(err, data){
        if(err) throw err;
        // return data of file
        res.write(data);
        res.end();
    })
})

server.listen(6300)


/*
Whenever we get application then we just run two commands
1) npm i                to install all the packages and dependencies
2) npm start            to start the server
*/

//Note:- Whenever we get the application we never ask which file to start because the file that has server to start will be written in package.json 
