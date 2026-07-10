
const button = document.querySelector('#submit');
// console.log(button);
const myDiv = document.createElement('div');

function apiCall(username){
    const url = "https://api.github.com/users/" + username;

    const xhr = new XMLHttpRequest();

    xhr.open("GET",url);

    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            console.log(this.responseText);
            const data = JSON.parse(this.responseText);

            // console.log(data.followers);


            myDiv.innerHTML = `
            <h3>Username </h3>
            <b>${data.name} </b>
            <hr>
            <h3>Followers </h3>
            <b>${data.followers} </b>
            <hr>
            <h3>Public Repos </h3>
            <b>${data.public_repos} </b>
            `;

            document.querySelector('#DataHere').appendChild(myDiv);
        }
    }

    xhr.send();
}

function eventHandler(){
    console.log("button clicked");

    const username = document.querySelector('#name');
    console.log(username.value); 
    apiCall(username.value);
}
button.addEventListener('click',eventHandler);