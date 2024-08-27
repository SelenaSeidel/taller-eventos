function saludo(){
    alert("Hola! Soy el div!");
};
function saludoboton(event){
    alert("Hola!");
    event.stopPropagation();
};

document.addEventListener("DOMContentLoaded", function (){
 const div = document.querySelector("div");
 const btn = document.querySelector("button");
 btn.addEventListener("click",saludoboton);
 div.addEventListener("click", saludo);
});