export class ContaCorrente{
    numero; 
    agencia;
    cidade;
    saldo = 0;

    depositar(valor){
        if(valor > 0){
            this.saldo += valor;
        }
    }

    sacar(valor){
        if(this.saldo < valor) return;
        
       return this.saldo -=valor;
    }

    transferir(valor,conta){
        if(valor < 0) return;
        
        this.sacar(valor);    
        conta.saldo += valor;
    }
}