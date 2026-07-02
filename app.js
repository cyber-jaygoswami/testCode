const express = require('express');
const app = express();

app.get("/welcome",(req,res)=>{
    res.status(200);
    res.send("This is my first contribution to open source Projects.")
})

app.listen(3000,()=>{
    console.log("Server is running...");
})
console.log("modified by AD");