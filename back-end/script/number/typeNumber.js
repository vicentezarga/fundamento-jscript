//Tipo Number

const meuNumero = 3;

const primeiroNum = 1;
const secondNum = 2;

const opercaoMatematica = (primeiroNum + secondNum) * meuNumero;

console.log(opercaoMatematica);

//Ponto Flutuante 

const numeroPontoFlutuante = 3.3;
const secondPontoFlutuante = .5;

var novaOperacao = opercaoMatematica * (numeroPontoFlutuante)/secondNum;

//utilizando número PI
novaOperacao = novaOperacao * Math.PI; 

console.log(novaOperacao.toFixed(2));
