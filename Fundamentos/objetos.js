const prod1 = {};
prod1.nome = "celular top";
prod1.preco = 4999.99;


prod1["acabamento"] = "Aço escovado";
console.log(prod1);
prod1.acabamento = "madeira";
console.log(prod1);

prod2 = {
    nome: "Camisa",
    preco: 200,
    obj: {
        desconto: 0.4

    }
}

console.log(prod2);