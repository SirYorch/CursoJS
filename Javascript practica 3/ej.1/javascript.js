class celular{
      constructor(marca, color, peso, resolucion, camara, ram, encendido){
      this.marca = marca;
      this.color = color;
      this.peso = peso;
      this.resolucion = resolucion; 
      this.camara = camara;
      this.ram = ram; 
      this.encendido = false ; 
      this.info =`marca:   <b>${marca}</b><br>
            color: <b>${this.color}</b><br>
            peso: <b>${this.peso}gr</b><br>
            resolucion: <b>${this.resolucion}px</b><br>
            camara: <b>${this.camara}mp</b><br>
            Ram: <b>${this.ram}GB<br></b><br>
            `;;
      }
      verSpecs(){
            document.write(this.info)
      }
      prender(){
            if(this.encendido == false){
                  alert(`${this.marca} Encendiendo`);
                  this.encendido = true;
            } else {
                  alert(`${this.marca} apagando`)
                  this.encendido= false;
            }
      }
      reiniciar(){
            if(this.encendido == true){
                  alert(`${this.marca} reiniciando....` + `Por favor espere`);
                  alert(`apagando...`);
                  alert(`prendiendo...`)
                  this.encendido = false; 
                  this.encendido= true;
            }else {alert(`EL telefono ${this.marca} esta apagado`)}
      }
      tomarFoto(){
            if(this.encendido == true){
                  alert(`${this.marca} Tomando Foto...`);
            } else {alert(`EL telefono ${this.marca} esta apagado`)}

      }
      grabar(){
            if(this.encendido== true){
                  alert(`${this.marca} Grabando...`)
            } else {alert(`el telefono ${this.marca} está apagado`)}
      }
}

class nuevaGamma extends celular{
      constructor(marca, color, peso, resolucion, camara, ram, camara2){
            super(marca, color,peso, resolucion, camara, ram,)
            this.camara2 = camara2;
            this.encendido = false; 
            this.info =`marca:   <b>${marca}</b><br>
            color: <b>${this.color}</b><br>
            peso: <b>${this.peso}gr</b><br>
            resolucion: <b>${this.resolucion}px</b><br>
            camara: <b>${this.camara}mp</b><br>
            camara secundaria: <b>${this.camara2}mp</b><br>
            Ram: <b>${this.ram}GB<br></b><br>
            ` ; 
      }
      prender(){
            if(this.encendido == false){
                  alert(`${this.marca} Encendiendo`);
                  this.encendido = true;
            } else {
                  alert(`${this.marca} apagando`)
                  this.encendido= false;
            }
      }
      reiniciar(){
            if(this.encendido == true){
                  alert(`${this.marca} reiniciando....` + `Por favor espere`);
                  alert(`apagando...`);
                  alert(`prendiendo...`)
                  this.encendido = false; 
                  this.encendido= true;
            }else {alert(`EL telefono ${this.marca} esta apagado`)}
      }
      tomarFoto(){
            if(this.encendido == true){
                  alert(`${this.marca} Tomando Foto...`);
            } else {alert(`EL telefono ${this.marca} esta apagado`)}

      }
      grabar(){
            if(this.encendido== true){
                  alert(`${this.marca} Grabando...`)
            } else {alert(`el telefono ${this.marca} está apagado`)}
      }
      verSpec(){
            document.write(this.info)
      };
      camaraLenta(){ if(this.encendido == true){
            alert(`${this.marca} grabando a camara lenta`)
      }else{alert(`el telefono ${this.marca} está apagado`)}
};
      reconocimientoFacial(){
            if(this.encendido== true){
                  alert(`${this.marca} Reconociendo rostro...`)
            } else { alert(`el telefono ${this.marca} está apagado`)}
      };


}

const xiaomi = new celular(`xiaomi`,`dark blue`, `72`, `720`, `48`, `3`,)
const samsung = new celular(`samsung`,`light red`, `89`, `1080`, `64`, `4`)
const nokia = new celular(`nokia`,`green`, `80`, `720`, `12`, `2`)
const xiaomi2 = new nuevaGamma(`xiaomi gamma alta`,`dark blue`, `83`, `1080`, `64`, `4`, `108`)
const samsung2 = new nuevaGamma(`samsung gamma alta`,`light red`, `95`, `1620`, `64`, `6` ,`108`)

xiaomi.verSpecs();
samsung.verSpecs();
nokia.verSpecs();

xiaomi2.verSpec();
samsung2.verSpec();

`
xiaomi.prender();
xiaomi.tomarFoto();
nokia.prender();
nokia.grabar();
//                                 nokia.camaraLenta();
xiaomi2.prender();
xiaomi2.camaraLenta();
samsung2.reconocimientoFacial();
samsung2.grabar();`