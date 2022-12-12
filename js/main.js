// Escoger una cadena d texto lo que mas se repite 




function letraRepetida(texto){
    let contadorLetras= 0;
    let unicasLetras= [];
    let almacenadorVecesRepetidas =[];
    
    texto = texto.toUpperCase().split("").sort();

    for (let i = 0; i < text.length; i++) {
        if (texto[i+1] === texto[i]){
            contadorLetras =1;
            
    

        }else{
            unicasLetras.push(texto[i]);
            almacenadorVecesRepetidas.push(contadorLetras);
            contadorLetras =1;
        

        }
      
        
    }
    console.log (almacenadorVecesRepetidas);
    console.log(unicasLetras);
    console.log(texto);

    let valorMaximo =Math.max(...almacenadorVecesRepetidas);
    let letraMasRepetida ="";

    for (let i= 0; i <almacenadorVecesRepetidas; i++) {
        if (almacenadorVecesRepetidas[i]=== valorMaximo){
            letraMasRepetida = unicasLetras[i];
        }
    }
    return"La letra que mas se repite es :"  +letraRepetida+ "un total de" +valorMaximo + "veces";



    


}

console.log(resultado);"La letra que mas se repite es :" 



