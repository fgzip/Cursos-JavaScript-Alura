
console.log(`\nTrabalhando com listas\n`);

/*
const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;


 console.log(`Destinos possíveis`);
 console.log(salvador, saoPaulo, rioDeJaneiro);
*/

let listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`); // funcionaria com const, sabe deus pq

console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);

// Tira são paulo
listaDeDestinos.splice(1, 1);
console.log(listaDeDestinos);

// Imprime apenas o Rio
console.log(listaDeDestinos[1]);
