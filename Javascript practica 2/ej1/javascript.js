let free=true
let tiempo = 4 

while(true){
        let edad= prompt("Qué edad tenés wapo/a?");
        tiempo++;
if(tiempo== 5){
        tiempo=0
        free= true;
}

        if(edad>=18 && free== true && tiempo>=2){
                alert("Mirá precioso podés entrar y además entras gratis que más querés");
                free=false;
        } else if( edad>=18){
                alert ("Dale precioso vas a poder pasar pero me das 20 pesos si o si");
        } else if(edad <18 ){
                alert("no jods estas aun enano como para poder entrar aqui hay cosas malas muchacho mejor vete");
        }
}