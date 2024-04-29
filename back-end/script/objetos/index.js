import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {Cidade} from "./Cidade.js";

const cliente1 = new Cliente();
cliente1.nome = 'José Agusto';
cliente1.cpf = 12485296303;

const conta = new ContaCorrente();
conta.numero = '25068';
conta.agencia = '1001';

const saoPaulo = new Cidade();
saoPaulo.nome = 'São Paulo';
saoPaulo.estado = 'SP';

conta.cidade = saoPaulo;
cliente1.conta = conta;

cliente1.conta.depositar(100);

const conta2 = new ContaCorrente();
conta2.numero = '30907';
conta2.agencia = '1002';

const recife = new Cidade();
recife.nome = 'Recife';
recife.estado = 'PE';
conta2.cidade = recife;

cliente1.conta.transferir(50,conta2);

console.log(cliente1);
console.log(conta2);
