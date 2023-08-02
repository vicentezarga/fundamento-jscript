var btnImportar = document.querySelector("#importar-paciente");

btnImportar.addEventListener("click",function(){
   
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.open("get","https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");
    
    xhrRequest.addEventListener("load", function(){
        
        var logAjax = document.querySelector("#erro-import");

       if(xhrRequest.status == 200){
            logAjax.classList.add("invisivel");
            var response = xhrRequest.responseText;
            var pacientes = JSON.parse(response);

            pacientes.forEach(paciente => {
                adicionarPaciente(paciente);
            });
        }else{
            logAjax.textContent = "Erro ao importar pacientes cod:"
                 + xhrRequest.status;
            logAjax.classList.remove("invisivel");
            logAjax.classList.add("log-Erro");
            
            setTimeout(function(){
                
                logAjax.classList.add("invisivel");     
            }, 2000);
        }    
    });
    
    xhrRequest.send();
});