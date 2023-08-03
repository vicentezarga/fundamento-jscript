//Conversão Implicita 
const numero = 456;
const numeroString = '456';

//Compara valor e tipo
console.log(numero===numeroString);

//Próprio javaScrip converteu o número para String e fez a comparação (apenas valor da váriavel)
console.log(numero==numeroString);

//Conversão explicita Number() or String()
let v1 = numero + Number(numeroString);
console.log(v1);

