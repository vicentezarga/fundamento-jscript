function calculoSalarioPagoHora(salario, horas){

    let pagamento = salario / horas; 
    
    return pagamento;
}

    let salarioSemFormato = calculoSalarioPagoHora(3000,176);
    let salarioArredondado = Math.round(salarioSemFormato); 
    let salarioFormatoReal = salarioSemFormato.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});

    console.log( 'Salário: ' + salarioSemFormato);
    console.log('Salário Arredondado: ' + salarioArredondado);
    console.log('Salário c/ Duas casas decimais: ' + salarioSemFormato.toFixed(2));
    console.log('Salário Real: ' + salarioFormatoReal);