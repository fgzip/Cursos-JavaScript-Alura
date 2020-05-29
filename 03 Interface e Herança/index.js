import {Cliente} from "./Cliente.js"
import { Gerente } from "./Funcionarios/Gerente.js"
import {Diretor} from "./Funcionarios/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"


const diretor = new Diretor("Rodrigo", 1000, 12345678910);
diretor.cadastrarSenha('123456');

const gerente = new Gerente("Ricardo", 5000, 11122233344);
gerente.cadastrarSenha('123');

const cliente = new Cliente("Lais", 123213123123, "123");

const estaLogado = SistemaAutenticacao.login(diretor, '123456');
const estaLogado2 = SistemaAutenticacao.login(gerente, '123');
const clienteLogado = SistemaAutenticacao.login(cliente, '123');

console.log(estaLogado);
console.log(estaLogado2);
console.log(clienteLogado);