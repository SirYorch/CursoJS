let ancho = window.innerWidth;
let alto = window.innerHeight;

if(ancho <720 && alto < 1600){
    alert(`La resolucion de la pantalla debe ser HD o 720 minimo para empezar`)
}

let boton = document.querySelector(`.enviar`)
boton.addEventListener(`click`, function(){let si = confirm(`tas seguro papi saoko?`)
if(si==true){
    alert(`listp papi saoko ya comprastes eso q querias comprar`)
}else if(si==false){
    alert(`bueno papi nadie te obliga a compral pero yo se que tu haras lo correcto <3`)
}})

boton.setAttribute(`value`,boton.getAttribute(`value`).toUpperCase())