const http = require('http');

http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write("<h1>Login</h1>");
        res.write("<form action='/login' method='POST'>");
        res.write("Username : <input type='text' name='uname'><br>");
        res.write("Password : <input type='password' name='pass'><br>");
        res.write("Address : <textarea name='address'></textarea><br>");
        res.write("<input type='submit' value='Submit'>" )
        res.write("</form>");

        res.end();
        
    }

    else if(req.url === "/login" && req.method === "POST"){
        let mydata=[];
        req.on('data',(chunk)=>{
            mydata.push(chunk);
        })
        req.on('end',()=>{
            // console.log(mydata);
            const username = Buffer.concat(mydata).toString().split('&').at(0).split('=').at(1);
            console.log(username);
        })
    }
}).listen(8080);