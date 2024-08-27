function saludo(){
    alert("Hola! Soy el div!");
};
document.addEventListener("DOMContentLoaded", function (){
 const div = document.querySelector("div");
 div.addEventListener("click", saludo);
});