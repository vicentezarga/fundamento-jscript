/*Tudo que aplicamos dentro de aspas simples ou duplas vai ser 
entendido como uma String*/

const texto1 = "Olá Javascript!";
const texto2 = 'Olá JavaScript!';
const chave = 'senha@#$importante';

const citacao = 'O Vicente disse algo importante "citações"';

//Template String 
var vetor = [30,13,22,180];
vetor.sort((a,b)=>a-b);

vetor.forEach(num => {
    
    let numberSorte = `Numero Sorteado ${num}`; 
    console.log(numberSorte);
});
