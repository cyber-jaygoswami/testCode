const https = require('https');

const req= https.request("https://www.google.com",(res)=>{
    res.on('data',(chunks)=>{
        console.log(chunks.toString());
    })
    res.on('end',()=>{
        console.log("Got the data");
    })
});

req.end();