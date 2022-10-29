const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3], valores[4]);
valores[4] = "teste";
console.log(valores[4]);
valores[9] = "x";
console.log(valores);
console.log(valores.length);

valores.push({id :3}, false, null, "teste2");
console.log(valores);
console.log(valores.length);

const x = (valores.pop());
console.log("X é igual a "+ x);
delete valores[0];
console.log(valores);

console.log(typeof valores);
