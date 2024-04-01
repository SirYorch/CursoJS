let cantidad = prompt("Cuantos alumnos son?");
let alumnosTotales = [];

for (i=0;i<cantidad;i++){
    alumnosTotales[i] = [prompt("Qué nombre tenés?, alumno "+ (i+1)),0];
}
const tomarAsistencia = (nombre,p)=>{
    let asistencia = prompt(nombre);
    if (asistencia == "p") {
        alumnosTotales[p][1]++
    }
}

    for (i=0; i<30; i++){
        for (alumno in alumnosTotales) {
            tomarAsistencia(alumnosTotales[alumno][0],alumno)
        }
    }


    for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}<br> 
                    Tiene ${alumnosTotales[alumno][1]} Asistencias <br>
                    Tiene ${30-alumnosTotales[alumno][1]} Faltas`
            if (30-alumnosTotales[alumno][1]>=3){
                resultado = resultado + `<br> <b>Reprobado por inasistencias</b><br> <br>`
            } else {resultado = resultado +'<br><br>'}

            document.write(resultado)
    }
