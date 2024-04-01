let mate = document.querySelector(`.mate`);
let lengua = document.querySelector(`.lengua`);
let social = document.querySelector(`.sociales`);
let ciencia = document.querySelector(`.ciencias`);
let ingless = document.querySelector(`.ingles`);

let a = `Juan Gumersindo Pedro Richard Ruben Miguel Alberto Hajar Maria Paul Consuelo Cofla Liliana Yolanda Andres Piedad Lia Wilson Eneko Ester Sebastian Antioquito Selena Gabriel Dario Emily Wilfred Hugo`;
let nombres = a.split(` `);
let lista=[]; 
for(i=0; i<5 ; i++){
    var numero1 = Math.round(Math.random()*25)
lista[i] = nombres.sort(function(){return 0.5-Math.random()});
lista[i] = lista[i].slice(0,numero1)
}

class clase { 
    constructor(materia, profesor, alumnos){
        this.materia= materia;
        this.profesor = profesor; 
        this.alumnos= alumnos; 
    }

    clase(){
        let listaCompleta = this.alumnos.sort().join(`<br>`)
        let mensaje = `<div class="clase">Clase: <b>${this.materia}</b><br>
                        Profesor: <b>${this.profesor}</b><br>
                        alumnos: <b><br>${listaCompleta}</b></div><br><br>`
        if(this.materia == `Matematicas`){mate.innerHTML = mensaje}else
        if(this.materia == `Literatura`){lengua.innerHTML = mensaje}else
        if(this.materia == `Sociales`){social.innerHTML = mensaje}else
        if(this.materia == `Ciencias`){ciencia.innerHTML = mensaje}else
        if(this.materia == `Ingles`){ingless.innerHTML = mensaje}
        
    }
    quitar(){
        if(this.materia == `Matematicas`){mate.innerHTML = `  `};
        if(this.materia == `Literatura`){lengua.innerHTML = `  `};
        if(this.materia == `Sociales`){social.innerHTML = `  `};
        if(this.materia == `Ciencias`){ciencia.innerHTML = `  `};
        if(this.materia == `Ingles`){ingless.innerHTML = `  `};

    }
}

let alumno = (alumno = prompt(`Que alumno quieres buscar?`))=>{
    let incluye = 0;
    let mate,lite,soci,cien,ingl = false;
    for(i=0; i<5;i++){
        if(lista[i].includes(alumno)==true){
            incluye++;
            if(lista[i]==lista[0]){
            mate =true
            };
            if(lista[i]==lista[1]){
            lite = true;
            };
            if(lista[i]==lista[2]){
            soci = true
            };
            if(lista[i]==lista[3]){
            cien= true;
            };
            if(lista[i]==lista[4]){
            ingl = true;
            }
        }
    }
    let mensaje = `<div class="alumno">El/La alumno <b>${alumno}</b> tiene <b>${incluye}</b> clases,<br>
    y estas son: <br></div>`;
    let mensajes = document.querySelector(`.mensaje`);
    mensajes.innerHTML = mensaje;
    if(mate==true){matematicas.clase()}else {matematicas.quitar()};
    if(lite==true){literatura.clase()}else {literatura.quitar()};
    if(soci==true){sociales.clase()}else {sociales.quitar()};
    if(cien==true){ciencias.clase()}else {ciencias.quitar()};
    if(ingl==true){ingles.clase()}else {ingles.quitar()};


    setTimeout(function(){mensajes.innerHTML=` `;mostrarClase()},10000)
}
let matematicas = new clase(`Matematicas`,`Kevin Arauz`,lista[0])
let literatura = new clase(`Literatura`,`Andre Peralta`, lista[1])
let sociales = new clase(`Socicales`,`Patricio Tenesaca`, lista[2])
let ciencias = new clase(`Ciencias`,`Narciso Diez`, lista[3])
let ingles = new clase(`Ingles`,`Martina Fraile`, lista[4])

function mostrarClase (){
    matematicas.clase();
    literatura.clase();
    sociales.clase();
    ciencias.clase();
    ingles.clase();
}


let inscribir = ( alumno,clase) => {
    alumno =  prompt(`Alumno para inscribir`);
    clase = prompt(`materia a la que se quiere inscribir`)
    if(clase == `matematicas` && lista[0].length<20 ){
        lista[0].push(alumno);matematicas.clase();
        alert(`el alumno ${alumno} se ha registrado a la clase de ${clase}`)
    }else if(clase == `literatura` && lista[1].length<20 ){
        lista[1].push(alumno);literatura.clase();
        alert(`el alumno ${alumno} se ha registrado a la clase de ${clase}`)
    }else  if(clase == `sociales` && lista[2].length<20 ){
        lista[2].push(alumno);sociales.clase();
        alert(`el alumno ${alumno} se ha registrado a la clase de ${clase}`)
    }else if(clase == `ciencias` && lista[3].length<20 ){
        lista[3].push(alumno);ciencias.clase();
        alert(`el alumno ${alumno} se ha registrado a la clase de ${clase}`)
    }else if(clase == `ingles` && lista[4].length<20 ){
        lista[4].push(alumno);ingles.clase();
        alert(`el alumno ${alumno} se ha registrado a la clase de ${clase}`)
    }else{
        alert(`no puedes inscribirte a una materia que está lleno o que no existe`)};
}
mostrarClase()