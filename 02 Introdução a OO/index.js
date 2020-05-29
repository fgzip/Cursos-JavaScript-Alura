import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

const cliente1 = new Cliente('João', '111.222.333-44');
const cliente2 = new Cliente('Maria', '123.456.789-10');

const contaCorrenteJoao = new ContaCorrente(cliente1, 101);
const contaCorrenteMaria = new ContaCorrente(cliente2, 102);

contaCorrenteJoao.depositar(500);
contaCorrenteJoao.transferir(200, contaCorrenteMaria);

console.log(contaCorrenteJoao);
console.log(contaCorrenteMaria);

const conta3 = new ContaCorrente(cliente2, 104);

let valor = 200;
conta3.depositar(valor);

console.log(conta3.cliente);
console.log(conta3.saldo);

console.log(ContaCorrente.numeroDeContas);

// conta3.saldo = 3000;