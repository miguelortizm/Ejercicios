
   class Gelatina{ 
        constructor(color, sabor, azucar,combinar,color2, sabor2){ //Propiedades
         this.color= color;
         this.color2=color2;
         this.sabor= sabor;
         this.sabor2=sabor2;
         this.azucar= azucar;
         this.combinar=combinar;
        }
         
        combinars(){ //metodo
            
            
            if (this.combinar == "S") {

                    return  "Se ha combinado: Sabor: " + this.sabor + ", con sabor 2 : " + this.sabor2 + ", Color: " + this.color + ", con color2 " + this.color2 + ", con " + this.azucar + " de azucar"
                
            }
             else {
   
                    return  "Se ha producido la gelatinca con: " + "Sabor: " + this.sabor + ", Color: " + this.color + ", con Gramos " + this.azucar + " de azucar"
                
            }
        }
        
    }

var Gelatina1 = new Gelatina("Roja","Fresa","12gr","S","Verde","Manzana"); //Objeto
var Gelatina2 = new Gelatina("Roja","Fresa","12gr","N","","");

    console.log(Gelatina1.combinars());
    +console.log(Gelatina2.combinars());

    