
var filtroPaciente = document.querySelector("#filtro-paciente");

filtroPaciente.addEventListener("input", function(){
    
    var pacientes = document.querySelectorAll(".paciente");
    
    if(this.value.length > 0){
            pacientes.forEach(paciente =>{
            var tdNome = paciente.querySelector(".info-nome");
            var txNome = tdNome.textContent;
            var expressao = new RegExp(this.value,"i");

            if(!expressao.test(txNome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        });
    }else{
        pacientes.forEach(paciente =>{
            paciente.classList.remove("invisivel");
        })
    }  
});
