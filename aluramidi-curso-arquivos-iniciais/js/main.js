const listaTeclas = document.querySelectorAll('.tecla');

/*Variável Let utilizada para guardar valores que devem ser atualizados 
ao longo de uma iteração.*/
for(let contador = 0; contador < listaTeclas.length; contador++){

    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //Template String     
    
    tecla.onclick = function(){ 
            tocarsom(idAudio);
        };
    tecla.onkeydown = function(event){
        
        if(event.code === 'Enter' || event.code === 'Space'){
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
function tocarsom(seletorAudio){

    const elemento = document.querySelector(seletorAudio);
        
    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }else{
        console.log('Instrumento inválido ou não encontrado!');
    }
}

