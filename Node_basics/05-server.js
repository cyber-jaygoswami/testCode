const http = require('http');

const reqListener = (req,res)=>{
    if(req.url === "/users"){
        res.setHeader("Content-Type","application/json")
        res.write('{"username" : "Jay232"}');
        res.end();
    }
    else{
    res.setHeader("Content-Type","text/html");
    res.write("Hello to the website")
    res.write("<h1>Hello World</h1>");
    console.log(req.headers['user-agent']);
    
    res.end();
    }
}

const server = http.createServer(reqListener);

server.listen(8080);

