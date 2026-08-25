// Create Promise
// const promise1 = new Promise((resolve,reject)=>{
//     let error = true;

//     if(!error){
//         resolve("Promise Completed");
//     }
//     else{
//         reject("Promise cancelled");
//     }
// });


// //Consume Promise
// promise1
// .then((message)=>{
//     console.log(message);
// })
// .catch((message)=>{
//     console.log(message);
// });



function getData(endpoint){
    return new Promise((resolve,reject)=>{
    const xhr = new XMLHttpRequest();
    xhr.open("GET",endpoint);

    xhr.onreadystatechange = function(){
        if(this.readyState == 4){
            if(this.status == 200){
                resolve(this.responseText);
            }
            else{
                reject("error");
            }
        }
    }
    
    setTimeout(()=>{
        xhr.send();
    },Math.floor((Math.random() * 2000) + 1000 ));
    });
    
}

// getData('./movies.json')
// .then((data)=>{
//     console.log(data);
//     return getData("./actors.json");
// })
// .then((data)=>{
//     console.log(data);
//     return getData('./directors.json');
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })



fetch("https://api.github.com/users/cyber-jaygoswami")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch()


