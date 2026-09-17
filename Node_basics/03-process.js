const process = require('process');

console.log(`Process Arch : ${process.arch}`);
console.log(`Process Arguments : ${process.argv}`);
console.log(`Process ID : ${process.pid}`);

// setTimeout(()=>{},10000);

process.kill(6916);

