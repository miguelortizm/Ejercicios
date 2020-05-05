
var miArrTarea1 =[3,54,34,1,0,2,12,29,5] 
var posicion = 0
var posicion2 = 0
var resultado
var valor
var valormayor
var valormenor
var indice = 0


    valor= miArrTarea1[indice];
    posicion2 = 0;
    valormayor= miArrTarea1[posicion2];

    //busca el mayor
    while (posicion2 <= miArrTarea1.length){

        valor2=  miArrTarea1[posicion2 + 1]
        posicion2 = posicion2 + 1;

        if(valor2 > valormayor){
                    
           valormayor = valor2;
           valor2 = miArrTarea1[posicion2 + 1];

          }
          else{
          }
    

    }

    resultado = 'Valor mayor: ' + valormayor;
    console.log(resultado);

    
    valor= miArrTarea1[indice];
    posicion2 = 0
    valormenor= miArrTarea1[posicion2];


    //busca el menor
    while (posicion2 <= miArrTarea1.length){

        valor2=  miArrTarea1[posicion2 + 1]
        posicion2 = posicion2 + 1;

        if(valor2 < valormenor){
                    
           valormenor = valor2;
           valor2 = miArrTarea1[posicion2 + 1];

          }
          else{
          }
    

    }

    resultado = 'Valor menor: ' + valormenor;
    console.log(resultado);



    posicion2 = 0
    valor= miArrTarea1[posicion2];


    resultado =  valormenor ;
    console.log(resultado);

        while (valormenor != valormayor){
            
            posicion2 = 0
            //valor = miArrTarea1[posicion2]; 
            valor = valormayor; 

            while (posicion2 <= miArrTarea1.length){
                    
                    
                       
                    valor2=  miArrTarea1[posicion2 + 1]
                    posicion2 = posicion2 + 1;        
                    
                    if( valor2 > valormenor){

                        if(valor2 < valor){

                            valor = valor2;
                            valor2 = miArrTarea1[posicion2 + 1];
 
                           }
                           else{
                           }
                       
                      }
                      else{
                      }
                      
                   
            }
            valormenor = valor;
            resultado =  valormenor ;
            console.log(resultado);
        }




