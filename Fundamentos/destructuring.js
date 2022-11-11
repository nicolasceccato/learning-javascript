const pessoa = {
    nome: "ana",
    idade: 5,
    endereco: {
        logradouro : "Rua abc",
        numero: 1000
    }
}
const {nome, idade} = pessoa;

console.log(nome, idade)

const {nome: n, idade: i} = pessoa;

console.log(n, i)

const {sobrenome, humor = true} = pessoa;
console.log(sobrenome, humor);

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)
