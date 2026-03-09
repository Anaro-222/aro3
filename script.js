//console.log("hola");

const titulo = document.getElementById ("titulo");
const varTexto= document.getElementById("texto");
const listaTextos = ["Roberto antes era feliz", "pero ya no", "un hechizero le puso un encantamiento", "ahora su cara se vuelve verde cada vez que la tocas"];

let estadoInicial = true
let indice = 0;

titulo.addEventListener ("click", ()=> {
    if (estadoInicial===true) {
     titulo.innerText = "Hola hola hola";
     titulo.style.color= "#a689f5";
     titulo.style.backgroundColor= "white";
    } else {
        titulo.innerText= "Roberto";
        titulo.style.color= "rgb(0, 55, 255)";
        titulo.style.backgroundColor= "transparent";
    }
    estadoInicial=!estadoInicial;

})

varTexto.addEventListener("click", () => {
    varTexto.innerText = listaTextos[indice];

    if (indice < listaTextos.length) {
        varTexto.innerText = listaTextos[indice]
        indice = indice + 1;
    } else {
    // indice = 0; // Si quiero que vuelva a empezar
    varTexto.innerText = "FIN.";
    }
})

