class animal{
   constructor(especie, edad, color){
         this.especie = especie;
         this.edad = edad;
         this.color = color;
         this.info = `soy ${this.especie}, tengo ${this.edad}, y soy de color ${this.color}`
   }
   verInfo(){document.write(this.info+ "<br><br>")}
}

class can extends animal{
      constructor(especie, edad, color, raza){
            super(especie, edad, color);
            this.raza = null;
      }
      ladrar(){
           alert(`y soy un ${this.raza}`)
      }
      set setRaza(newName){
            this.raza = newName;
      }
      get getRaza(){
            return this.raza;
      }
}

const perro = new can(`perro`, `2 años`, `café`,`Pitbull`);
const gato = new animal(`gato`, `1 años`, `blanco`)
const tucan = new animal(`tucan`, `0.5 años`, `negro, blanco y rojo`)
const drilo = new animal(`cocodrilo`, `15 años`, `verde`)
const pelicano = new animal(`pelicano`, `3 años`, `cafe`)



perro.verInfo();
perro.ladrar();

// Setters

perro.setRaza = `husky`
perro.ladrar();

// Getters   

alert(perro.getRaza)




//can.ladrar();
gato.verInfo();
tucan.verInfo();
drilo.verInfo();
pelicano.verInfo();


