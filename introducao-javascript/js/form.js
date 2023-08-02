var tituloForm = document.querySelector("#titulo-form")
tituloForm.textContent = "Add Paciente";

var btnAdicionar = document.querySelector("#adicionar-paciente");

btnAdicionar.addEventListener("click",function(event){
    event.preventDefault();
   
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteForm(form);

    var error = validar(paciente);

    if(error.length >0){
        exibirMensagem(error);
        return;
    }  
    adicionarPaciente(paciente);
    limparLog(document.querySelector("#log-mensagem"));
    form.reset();

});

function obtemPacienteForm(form){
    var paciente = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calculaImc(form.altura.value, form.peso.value)
    }
    return paciente;
}

function montaTR(paciente){

    var pacienteTR = document.createElement("tr");
    pacienteTR.classList.add("paciente");
  
    pacienteTR.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTR.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTR.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTR.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTR.appendChild(montaTd(paciente.imc,"info-imc"));

    return pacienteTR;
}

function montaTd(dado,classe){
    var pacienteTD = document.createElement("td");
    pacienteTD.textContent = dado;
    pacienteTD.classList.add(classe);

    return pacienteTD;
}

function validar(paciente){

    var erros = [];

    if(!validarPeso(paciente.peso)){
        erros.push("Peso inválido!")
    }
    if(!validarAltura(paciente.altura)){
        erros.push("Altura inválida!");
    }
    if(paciente.nome.length == 0){
        erros.push("Nome é obrigatório!");
    }
    if(paciente.gordura.length==0){
        erros.push("Gordura não informada!");
    }

    return erros;
}

function exibirMensagem(error){
    var logErro = document.createElement("ul");
    var logMensagem = document.querySelector("#log-mensagem")
    limparLog(logMensagem);

    error.forEach(log => {
        var liErro = document.createElement("li"); 
        liErro.textContent = log;
        liErro.classList.add("log-Erro");
        logErro.appendChild(liErro);
   });
   
   logMensagem.appendChild(logErro);
}
function limparLog(logMensagem){
    logMensagem.innerHTML = "";
}

function adicionarPaciente(paciente){
    var tablePaciente = document.querySelector("#tabela-pacientes");
    tablePaciente.appendChild(montaTR(paciente));
    montaTR(paciente);
}