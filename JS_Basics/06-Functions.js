

sum();
// Function Declaration
function sum(){
    console.log("SUm Function");
}

// sub(); // Error

// Function Expression
// const sub = function(){
//     console.log("Sub Function");
// }

// Arrow Function
const sub = ()=>{
    console.log("Sub Function");
}

// Callback Function
const server = (func)=>{
    func();
}


// const reqHandler = ()=>{
//     console.log("Request Handler Function");
// }

// server(reqHandler);

server( ()=>{
    console.log("Request Handler function");
})