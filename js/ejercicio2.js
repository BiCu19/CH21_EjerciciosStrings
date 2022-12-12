//Entrada
"Laura Aline"
// Salida
"enila arual"
 function nombreInvertido(nombre){
    let inverso="";
    for (let index=nombre.length; index >=0; index--) {
        inverso+=nombre.charAt(index);
        
    }
    return inverso
    console.log(nombreInvertido("Laura") );
 }