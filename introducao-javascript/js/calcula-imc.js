
var titulo = document.querySelector(".titulo");
titulo.textContent = "Clinical Nutrição"

var pacientes = document.querySelectorAll(".paciente")
 
for(var i=0; i< pacientes.length; i++){
    
    var paciente = pacientes[i];
    
    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;

    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;

    var ehPesoValido = validarPeso(peso);
    var ehAlturaValida = validarAltura(altura);

    var tdImc = paciente.querySelector(".info-imc");
    
    if(!ehPesoValido){
        console.log("Peso inválido!");
        ehPesoValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(!ehAlturaValida){
        console.log("Altura inválida!");
        ehAlturaValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.style.color ="orange";
    }

    if(ehPesoValido && ehAlturaValida){
        tdImc.textContent = calculaImc(altura,peso);
    }
}
function calculaImc(altura, peso){
    var imc = 0;
    imc = peso/(altura*altura); 

    return imc.toFixed(2);
}
function validarPeso(peso){
    if(peso > 0 && peso <= 1000){
        return true;
    }else{
        return false;
    }
}
function validarAltura(altura){
    if(altura > 0 && altura <= 3){
        return true;
    }else{
        return false;
    }
}




