const fs = require('fs');

const filePath = "./demo.txt"
const resutl_data = fs.readFileSync(filePath,{encoding:'utf-8'});


console.log(resutl_data);


