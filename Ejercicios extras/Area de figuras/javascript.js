let area =()=>{
var fig = prompt("¿De qué figura necesitas sacar el area?");
let resultado;
if(fig == 'circulo'){
var radio = parseInt(prompt('Cual es el radio del circulo?'));

resultado=3.1416*radio*radio
}else if(fig == 'rectangulo'){
    var lado1 = prompt(`cual es el tamaño del primer lado?`);
    var lado2 = prompt(`cual es el tamaño del segundo lado?`);
    resultado = lado1 * lado2;
}else if(fig == 'cuadrado'){
    var lado = prompt(`cual es el tamaño de lado?`);
    resultado = lado*lado;
}else if(fig == 'triangulo'){
    var base = prompt(`cual es el tamaño de la base?`);
    var altura = prompt(`cual es el tamaño de la altura?`);
    resultado= (base*altura)/2;
}
alert(resultado+`cm`);
}
area();
