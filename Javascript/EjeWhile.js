var cont = 0;

while (cont < 10) {
    console.log(cont)
    cont++
    break //rompe la ejecucion total de un ciclo
    
    //break
   /* If (cont==5){
        break;
    }*/

    //continue
    If (cont==5){
        continue;
    }
   // no ejecuta la siguiente sentencia y reinicia
    If (cont==1000000){
        console.log("mensaje")
    }

}