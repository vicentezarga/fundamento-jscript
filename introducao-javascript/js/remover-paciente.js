var table = document.querySelector("#tabela-pacientes");

table.addEventListener("dblclick",function(event){
    
    event.target.parentNode.classList.add("face-in");

    setTimeout(function(){
        if(event.target.tagName=="TD"){
            event.target.parentNode.remove();
        }
    },500);
});