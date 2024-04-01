let mensajes = ` I love you - You Are Amazing - You look weird... I Love That - IDK what else :/ - You are lovely - I miss you - I dont deserve you - You deserve the world - I will squish u :p `
let divisor = document.querySelector(`.mensaje`)
let mensajesIndividuales = mensajes.split(`-`)
console.log(mensajesIndividuales);


let boton = document.querySelector(`.boton`)

const mostrarMensaje = () => {
    mensajesIndividuales.sort(numero => Math.random(numero))
    let mensaje = mensajesIndividuales.shift()
    if(mensaje== undefined){
        mensajesIndividuales = mensajes.split(`-`)
        mensaje = `I literally Love ya`
    }
    divisor.innerHTML = mensaje
    
}

boton.addEventListener(`click`, mostrarMensaje)


