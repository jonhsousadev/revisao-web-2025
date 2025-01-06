function media(...arguments) {
  let sum = arguments.reduce((acc, val) => acc + val, 0);
  return sum / arguments.length
}

const parOuImpar = (num) => num % 2 === 0 ? 'par' : 'impar'; 

let resultadoMedia = media(11,11,11);

console.log(resultadoMedia);
console.log(parOuImpar(resultadoMedia));