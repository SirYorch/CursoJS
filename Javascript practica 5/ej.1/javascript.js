class llave{
    constructor(nueva, modelo,codigo){
        this.modelo = modelo;
        this.nueva = nueva;
        if(this.nueva == `nueva`){
            this.img= `<img src="nueva.png">`
        } else if(this.nueva == `vieja`){
            this.img= `<img src="vieja.png">`
        }
        this.codigo = codigo
    }

    llamarLlaves(){
    let contenedor = document.querySelector(`.contenedor`)
    let recuadro = document.createElement(`div`);
    recuadro.classList.add(`tarjeta`);
    recuadro.classList.add(`${this.codigo}`)
    recuadro.innerHTML = `${this.img}<br>La llave es <b>${this.nueva}</b><br> modelo : <b>${this.modelo}</b>`
    contenedor.appendChild(recuadro)
    }
}
let entrada = document.querySelector(`.entrada`)
function marcar(){
entrada.value = `${this}`;
console.log(entrada.value)

}

let llaveUno = new llave(`nueva` , `modeloUno`,Math.round(Math.random()*1000))
let llaveDos = new llave(`nueva` , `modeloDos`,Math.round(Math.random()*1000))
let llaveTre =new llave(`nueva` , `modeloTres`,Math.round(Math.random()*1000))
let llaveCuatro = new llave(`nueva` , `modeloCuatro`,Math.round(Math.random()*1000))
let llaveCinco  = new llave(`nueva` , `modeloCinco`,Math.round(Math.random()*1000))
let LLaveSeis = new llave(`nueva` , `modeloSeis`,Math.round(Math.random()*1000))
let llaveSiete = new llave(`nueva` , `modeloSiete`,Math.round(Math.random()*1000))
let llaveOcho = new llave(`nueva` , `modeloOcho`,Math.round(Math.random()*1000))
let llaveNueve = new llave(`nueva` , `modelonueve`,Math.round(Math.random()*1000))
let llaveDiez = new llave(`nueva` , `modeloDiez`,Math.round(Math.random()*1000))
let llaveOnce = new llave(`vieja` , `modeloUno`,Math.round(Math.random()*1000))
let llaveDoce = new llave(`vieja` , `modeloDos`,Math.round(Math.random()*1000))
let llaveTrece =new llave(`vieja` , `modeloTres`,Math.round(Math.random()*1000))
let llaveCatorce = new llave(`vieja` , `modeloCuatro`,Math.round(Math.random()*1000))
let llaveQuince  = new llave(`vieja` , `modeloCinco`,Math.round(Math.random()*1000))
let LLaveDiecuseis = new llave(`vieja` , `modeloSeis`,Math.round(Math.random()*1000))
let llaveDiecisiete = new llave(`vieja` , `modeloSiete`,Math.round(Math.random()*1000))
let llaveDieciocho = new llave(`vieja` , `modeloOcho`,Math.round(Math.random()*1000))
let llaveDiecinueve = new llave(`vieja` , `modelonueve`,Math.round(Math.random()*1000))
let llaveVeinte = new llave(`vieja` , `modeloDiez`,Math.round(Math.random()*1000))


let llavero = [llaveUno,llaveDos,llaveTre, llaveCuatro, llaveCinco, LLaveSeis, llaveSiete, llaveOcho, llaveNueve, llaveDiez, llaveOnce, llaveDoce, llaveTrece, llaveCatorce, llaveQuince, LLaveDiecuseis, llaveDiecisiete,llaveDieciocho, llaveDiecinueve, llaveVeinte]
//10 modelos
llavero.sort(function(){
    return 0.5-Math.random()
})
llavero.forEach(function(element){
    element.llamarLlaves()
}
)



let boton = document.querySelector(`.enviado`);
boton.value = boton.value.toUpperCase()



let cuadros = document.querySelectorAll(`.tarjeta`);

cuadros.forEach(function(element){
    element.addEventListener(`click`,function(){
        let seleccionada = document.querySelectorAll(`.seleccionada`)
    if (seleccionada.length == 1 ){
        seleccionada.forEach(function(element){
            element.classList.remove(`seleccionada`)
        })
    }
        this.classList.add(`seleccionada`);
        let elemento = document.querySelector(`.tarjeta`)
        console.log(elemento.classList[1])
    entrada.setAttribute(`value`,element)

    })
})
