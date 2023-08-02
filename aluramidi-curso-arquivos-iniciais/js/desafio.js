const teclado = document.querySelectorAll('input[type=button]');
const visor = document.querySelector('#tel_phone');

teclado.forEach(tecla =>{

    let digito = tecla.value;

    tecla.onclick = function(){
        imprimirDigito(digito);
    }
    tecla.onkeydown = function(event){
        let key = event.code;

        if(key === 'Enter' || key === 'Space'){
            tecla.classList.add('ativa');
        }    
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
});

function imprimirDigito(digito){
    document.querySelector('#tecla_sound').play();
    visor.value =`${visor.value}${digito}`; 
}