// Palíndromo ;Palabra o expresion que es igual si se lee de izquierda a derecha que de derecha a izquierda
//otto
//Anina
//Ana
//ada

function esPalindro(str){
    str=str.toLowerCase();
    str =str.replaceAll("","");
    if(reves(str)==str)
    return true;
    return false;


}

console.log(esPalindro);
