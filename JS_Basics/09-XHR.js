const xhr = new XMLHttpRequest();


xhr.open("GET","./movies.json");

xhr.onreadystatechange = function(){
    // console.log(this.readyState);
    if(this.readyState === 4){
        console.log(this.responseText);
    }
}


xhr.send();
