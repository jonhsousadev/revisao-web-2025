let carro = {marca: "Renault", modelo: "Stepway", ano: '2024'}

for (const key in carro) {
  if (Object.prototype.hasOwnProperty.call(carro, key)) {
    const element = carro[key];
    console.log(key+' '+element);
  }
}