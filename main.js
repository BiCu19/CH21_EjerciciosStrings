let btnEnviar =document.getElementById("btnEnviar");
btnEnviar.addEventListener("click",function(event){

    
    event.preventDefault();
    
    let exampleFormControlInput1 = document.getElementById("exampleFormControlInput1");
    let exampleFormControlTextarea1= document.getElementById("exampleFormControlTextarea1");
    let alertError = document.getElementById ("alertError");
     alertError.style.display="none";
     console.log(exampleFormControlTextarea1.value.length);
     console.log ("[" +
           exampleFormControlTextarea1.value.replaceAll(" "," ")
           + "]"
     );
     console.log (exampleFormControlTextarea1.value.replaceAll(" ", "").length);
    if (exampleFormControlTextarea1.value.trim().length<20){
        alertError.innerHTML="El mensaje debe contener 20 caracteres o mas";
        alertError.style.display="block";
        exampleFormControlTextarea1.focus();
        exampleFormControlTextarea1.select();
    
    }

});


