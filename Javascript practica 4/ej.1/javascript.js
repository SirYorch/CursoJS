while(true){var operacion = prompt(`1:suma 2:resta 3:multiplicacion 4:division 5:potencia 6:raiz2 7:raiz3`)
let a;
let b;
let resultado;
if(operacion == 1){
a= prompt(`Numero1 para sumar`)
b= prompt(`Numero2 para sumar`)
resultado = parseInt(a)+parseInt(b)
}
else if(operacion == 2){
a= prompt(`Numero1 del que se va a restar`)
b= prompt(`Numero2 para restar`)
resultado = a-b   
}
else if(operacion == 3){
a= prompt(`Numero1 para multiplicar`)
b= prompt(`Numero2 para multiplicar`)
resultado = a*b   
}
else if(operacion == 4){
a= prompt(`Numero1 para dividir`)
b= prompt(`Numero2 en cunatas partes se va a  dividir`)
resultado = a/b   
}
else if(operacion == 5){
a= prompt(`Numero1 para potenciar`)
b= prompt(`Elevado a...`)
resultado = a**=b
}
else if(operacion == 6){
a= prompt(`Numero1 del que vamos a sacar la raiz cuadrada`)
resultado = Math.sqrt(a)
}
else if(operacion == 7){
a= prompt(`Numero1 para sumar`)
resultado = Math.cbrt(a)
}
alert(resultado)}