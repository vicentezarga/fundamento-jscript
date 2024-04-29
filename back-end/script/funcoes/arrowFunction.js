function apresentar(nome){
    return `meu nome é ${nome}`;
}
//Arrow Function
const apresentaArrow = nome => `meu nome é ${nome}`;
const soma = (num1,num2) => num1 + num2; 

console.log(apresentaArrow('vicente'));
console.log(soma(1,5));

const multiplicador = (s1,s2,s3) => {
   
    const soma = s1 + s2;
   
    return soma * s3;
}

console.log(multiplicador(2,5,4));