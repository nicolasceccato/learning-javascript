const a = {name: "teste"};

const b = a;

console.log(a);
b.name = "ola";
console.log(a); //copia por referencia em objetos



let c = 3;
let d = c;
d++;

console.log(c);
console.log(d);//em tipos primitivos eh feita uma copia por valor
