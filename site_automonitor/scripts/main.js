const menu= document.getElementById("menu");
const container =document.getElementById("container");
let abierto= false;

function mostrar(){
    abierto=!abierto;
    container.classList.toggle("mostrar");
}

menu.addEventListener("click", ()=>{
    mostrar();
});

