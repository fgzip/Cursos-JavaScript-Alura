
console.log(`\nTrabalhando com loops\n`);

const listaDeDestinos = new Array(
  `Salvador`,
  `São paulo`,
  `Rio de Janeiro`,
  `Curitiba`
);

let idadeComprador = 18;
let estaAcompanhada = false;
let temPassagemComprada = false;
const destino = `Curitiba`;

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while(contador < 4) {
  if(listaDeDestinos[contador] == destino) {
    destinoExiste = true;
    break;
  }
  contador += 1;
}

console.log("Destino existe: " + destinoExiste);

if (podeComprar && destinoExiste) {
  console.log("Boa viagem!");
} else {
  console.log("Desculpe, tivemos um erro.");
}

for(let i = 0; i < 3; i++) {
  if(listaDeDestinos[i] == destino) {
    destinoExiste = true;
  }
}
