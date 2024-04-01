var dinero1= prompt("How much money does the first guy have");
var dinero2= prompt("How much money does the second guy have");
var dinero3= prompt("How much money does the third guy have");

let dineroTotal= parseFloat(dinero1)+parseFloat(dinero2)+parseFloat(dinero3);
var heladoPosible;
var helado;
if(dineroTotal<=1){mensaje="Sorry u can't buy any ice cream :/"}
else if (dineroTotal>=1&&dineroTotal<=1.99) {heladoPosible="banana"; helado=1} 
else if (dineroTotal>=2&&dineroTotal<=2.99) {heladoPosible="chicle";helado=2}
else if (dineroTotal>=3&&dineroTotal<=3.99) {heladoPosible="chocolate";helado=3}
else{heladoPosible="vainilla";helado=4};
let vuelto= dineroTotal - helado
document.write("$"+dinero1+`<br>`);
document.write("$"+dinero2+`<br>`);
document.write("$"+dinero3+`<br>`);
let mensaje=`You have $${dineroTotal} and you can buy the ${heladoPosible} ice cream for $${helado}, if you buy it you will have $${vuelto.toFixed(2)} for you`;
document.write(mensaje);

