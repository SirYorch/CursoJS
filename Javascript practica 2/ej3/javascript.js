function calculadora(){let operacion= prompt(`
Qué operacion vas a hacer?
1miltiplicar,2dividir,3sumar,4restar,5potencia,6radical
`);
function operar(a,b){
 let ecuacion;
    if(operacion==1){
  ecuacion=a*b
    }else
    if(operacion==2){
 ecuacion=a/b
    }else
    if(operacion==3){
 ecuacion=a+b
    }else
    if(operacion==4){
 ecuacion=a-b
    }else 
    if(operacion==5){
       ecuacion=a^b
    }

alert(ecuacion)
}
operar(parseInt(prompt("numero1")), parseInt(prompt("numero2")))}

calculadora()

calculadora()

calculadora()

calculadora()
