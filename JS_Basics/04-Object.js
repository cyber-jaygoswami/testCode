const obj1 = {
    name: "Jay",
    subject :"MERN",
}

console.log(obj1.name);


// OBJECT -> JSON
const JSONObj = JSON.stringify(obj1);

console.log(JSONObj);

console.log(JSONObj.name);

// JSON -> Object
const Obj2  = JSON.parse(JSONObj)
console.log(Obj2);
console.log(Obj2.subject);