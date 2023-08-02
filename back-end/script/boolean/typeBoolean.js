const cidade = 'recife';
let input = 'Recife';

input = input.toLowerCase();

const exists = cidade === input;

if(exists){
    console.log('cadastrada ' + exists);
}else{
    console.log('cidades distintas');
}

const number1 = 40;
const number2 = 35;

console.log(number1===number2);