//variables
const heading = document.querySelector("#heading");
let dogPerson=document.querySelector("#dogp");
let catPerson=document.querySelector("#catp");

//functions
dogPerson.oninput=function(){
    if(dogPerson.value.toLowerCase() === "dog"){
        heading.innerHTML="Welcome to the site 🐶!";
    } else {
        heading.innerHTML="Are you a dog or a cat person?";
    }
};

catPerson.oninput=function(){
    if(catPerson.value.toLowerCase() === "cat"){
        heading.innerHTML="Welcome to the site 😺!";
    } else {
        heading.innerHTML="Are you a dog or a cat person?";
    }
};

