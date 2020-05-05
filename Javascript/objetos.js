
/*
var miobjeto = {
color : 'Rojo',
peso : ' 2 gr',


//metodo
bailar(){
return "Estoy vailando";
}

}

//console.log(miobjeto)
console.log(miobjeto.color,miobjeto.peso, miobjeto.bailar)
*/

/*
var pelicual = {
    titulo : "tarzan",
    año : 1998,
    
    
    //metodo
    reproducir(){
    return "Estoy reproduciendo la pelicula" + this.titulo;
    }
    
    }
    console.log(pelicual.reproducir());
    */


    /*
   var pelicual = { //objeto
    //This hace referencia apelicula
    titulo : "tarzan",
    año : 1998,
    
    
    //metodo
    reproducir(){
        //console.log(this)
    return "Estoy reproduciendo la pelicula" + this.titulo;
    //return "Estoy reproduciendo la pelicula" + pelicual.titulo;

    //This para poder acceder a las propiedades del objeto
    }
    
    }
    console.log(pelicual.reproducir());
    */


    /*
   var pelicula = { 
    
    titulo : "tarzan",
    año : 1998,
    
    reproducir(){

    return "Estoy reproduciendo la pelicula" + this.titulo;

    }
    
    }

    class Vehiculo{ // para identificar clase la primera letra en mayuscula
    //constructor  - inicializa las propiedades de la clase funcion
        constructor(){
         this.peso="120kg"
         this.color="Azul"
        }
    }

var miCarro1 = new Vehiculo();   // objeto

    console.log(miCarro1);
    */


/*

    class Vehiculo{ // para identificar clase la primera letra en mayuscula
    //constructor  - inicializa las propiedades de la clase funcion
        constructor(peso, color){
         this.peso= peso;
         this.color=color;
        }
    }

var miCarro = new Vehiculo(78,"negro");   // objeto
var miCarro2 = new Vehiculo(60,"blanco");   // objeto

    console.log(miCarro);

    */


   class Vehiculo{ // para identificar clase la primera letra en mayuscula
    //constructor  - inicializa las propiedades de la clase funcion
        constructor(peso, color){ //propiedades
         this.peso= peso;
         this.color=color;
        }
        arrancar(){ //metodo
            return  "Estoy arrancando el carro de color " + this.color
        }
    }

var miCarro = new Vehiculo(78,"negro");   // objeto
var miCarro2 = new Vehiculo(60,"blanco");   // objeto

    console.log(miCarro2.arrancar());
