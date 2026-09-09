const events = require('events'); // Common JS

// Subject
const InstaInfulencer = new events();

// Observers
InstaInfulencer.on("100k Followers",()=>{
    console.log("Commnet : Congrats");
});
InstaInfulencer.on("100k Followers",()=>{
    console.log("Message : You don't diserve any of these");
});
InstaInfulencer.on("1M Followers",()=>{
    console.log("Call : Congrats for 1M");
});
InstaInfulencer.on("Gone",(place)=>{
    if(place ==='USA'){
        console.log("Happy Journy");
    }
    if(place==="Pakistan"){
        console.log("Muksad...");
    }
})



InstaInfulencer.emit("100k Followers");
// InstaInfulencer.emit("Gone",
//     "USA"
// )
InstaInfulencer.emit('Gone',"Pakistan")