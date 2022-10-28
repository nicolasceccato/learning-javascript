const nome =  "fulano";
const concatenacao = "olá " + nome + "!";
const template = `tchau ${nome}!`;//nova forma de concatenar

console.log(concatenacao);
console.log(template);

console.log(`1 + 1 = ${1+1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei...${up("cuidado")}`);