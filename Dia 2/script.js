let eu = {
  nome: 'Jonh',
  idade: 36,
  sexo: 'M'
}

const {nome, idade, sexo} = eu;

var sexoDefinido = sexo === 'M' ? 'Masculuno' : 'Feminino';

console.log(`Esse sou eu: me chamo ${nome}, tenho ${idade} anos e sou do sexo ${sexoDefinido}`);

const maioridade = (p) => p.idade >= 18 ? 'maior de idade' : 'menor de idade'

console.log(maioridade(eu));

let now = new Date();
let horaDoDia = now.getHours();

if(horaDoDia < 12) {
  console.log('Bom dia!');
} else if (horaDoDia < 18) {
  console.log('Boa tarde!');
} else {
  console.log('Boa noite!');
}