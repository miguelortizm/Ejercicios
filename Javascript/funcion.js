

/*
function mesa(p1,p2,p3){

    return p1 + p2+p3;
}


console.log(mesa(1,1,1))
*/

/*

var global="Variable global"

function mesa(){
 var local ="Varialbe local"
    console.log(local)
    return global;
}

var suma = mesa();
console.log(suma)
*/

/*
function externa(){
 var externa ="Varialbe externa" //se comporta como una global
  
 function interna(){
    var interna ="Varialbe interna"
    console.log(externa) 
 }  
 interna()

}

externa();
*/

/*
externa();
function externa(){
    var externa ="Varialbe externa" //se comporta como una global
     
    function interna(){
       var interna ="Varialbe interna"
       console.log(externa) 
    }  
    interna()
   
   }
   */
  

   /*
   var area
   function cuadrado (p1, p2){
    
    
    area = (p1 * p2);

    return area

   }

   cuadrado(5,5)
   console.log(area) 
   */
  
  
//Mejor practica 
   function cuadrado (p1, p2){
    
    var area
    area = (p1 * p2);

    return area

   }
   
   console.log(cuadrado(5,5)) 
   


     