
console.log("\nTrabalhando com atribuição de variáveis.\n")

let idade = 29;
let nome = "João";
let sobrenome = "da Silva";

console.log(nome, sobrenome);
console.log(nome + " " + sobrenome);

console.log(`Meu nome é ${nome} ${sobrenome}`);

/* Se fosse const, os comandos abaixo não funcionariam */
// nome = nome + sobrenome;
//nome += sobrenome;

const nomeCompleto = nome + sobrenome;
// nomeCompleto = 2;  - dá erro

console.log(nome);
