// 0


let numeros = [1,2,7,4,5,6,7,8,9];

// numeros.forEach(n => console.log(n));

for(let num in numeros) {
  console.log(numeros[num]);
}

let pares = numeros.filter(n => n % 2 === 0);
console.log(pares);