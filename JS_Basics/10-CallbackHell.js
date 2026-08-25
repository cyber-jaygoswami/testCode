
function getData(endpoint,cb){
    const xhr = new XMLHttpRequest();

    xhr.open("GET",endpoint);

    xhr.onreadystatechange = function(){
        cb(this.responseText);
    }
    


    setTimeout(()=>{
        xhr.send();
    },Math.floor((Math.random() * 2000) + 1000 ));
}


getData('./movies.json',(data)=>{
    console.log(data);
    getData('./actors.json',(data)=>{
        console.log(data);
        getData("./directors.json",(data)=>{
            console.log(data);
        })
    })
});


