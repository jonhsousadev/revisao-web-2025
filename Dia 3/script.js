// estruturas de repetição
// for

for(let i = 0; i < 10; i++) {
  console.log(i);
}

// while - a condição será avaliada antes de ser executada

let value = 5

while(value < 5) {
  console.log(`imprime ${value}`);
}

// do while - a condição será executada pelo menos uma vez antes de avaliada
value = 5;

do {
  console.log(`imprime com do o ${value}`);
} while (value < 5)