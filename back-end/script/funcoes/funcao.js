let x = '';
x = 'oi querido';

//Declaração clássica 
function imprimir(x){
    console.log(x);
}

imprimir(x);
imprimir('joão');

//Funções prontas

//Arredonda valor mais alto
console.log('ceil ' + Math.ceil(5.2));

//Arredonda valor mais baixo 
console.log('floor ' + Math.floor(5.2));

//Desconsidera valores decimais
console.log('truc ' + Math.trunc(5.2));

//Expressão de função ou função anônima
const soma = function(s1,s2){return s1+s2}
console.log(soma(1,2));
