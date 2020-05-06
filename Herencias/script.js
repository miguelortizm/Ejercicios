

class Empleado { 
    constructor(nombre, funcion){
        this.nombre = nombre;
        this.funcion= funcion;   
    }

    trabajoRealizado(){
        return "Yo " + this.nombre + " hago :" + this.funcion;
    }
}


var nuevoEmp = new Empleado("Cristian", "el tinto" );

console.log(nuevoEmp.trabajoRealizado());

class Jefe extends Empleado{
    constructor(nombre, funcion, colaboradores){
        super(nombre,funcion);
        this.colaboradores = colaboradores;
    }
    trabajoRealizadoJefe(){
        return "Yo " + this.nombre + " hago :" + this.funcion + " y tengo " + this.colaboradores + " colaboradores.";
    }

}

var nuevoJefe = new Jefe("Ricardo", "Dirige",8 );


console.log(nuevoJefe.trabajoRealizadoJefe());

class analista extends Empleado{ 
    constructor(nombre, funcion, experiencia, nivel_estudios){
        super(nombre,funcion);
        this.experiencia = experiencia;
        this.nivel_estudios= nivel_estudios;   

    }

    trabajoAnalista(){
        return "Nombre Analista " + this.nombre + " funciones :" + this.funcion + " años de experiencia: " + this.experiencia + "nivel de estudios: " + this.nivel_estudios;
    }
}

var nuevoAnalista = new analista("Pepito Perez", "Analista", "1", "profesional");
console.log(nuevoAnalista.trabajoAnalista());
console.log(nuevoAnalista.trabajoRealizado());



class director extends Jefe {
    constructor(nombre, funcion, colaboradores, area){
    super(nombre,funcion, colaboradores);
    this.area = area;

    }
    Director(){
        return "Nombre Director: " + this.nombre + " funciones:" + this.funcion + " Colaboradores: " + this.colaboradores + "Area: " + this.area;
    }
}

var nuevoDirector = new director("Juan Rivera", "Director", "7", "Tecnologia");
console.log(nuevoDirector.Director());