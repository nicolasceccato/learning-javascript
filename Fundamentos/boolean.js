let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

isAtivo = 0;
console.log(!!isAtivo);

//todos os numeros inteiros sao verdadeiros exceto zero
console.log("Verdadeiros");
console.log(!!3);
console.log(!!-1);
console.log(!!"");//sem espaço deu false
console.log(!![]);
console.log(!!{});
console.log(!!" ");
console.log(!!Infinity);

console.log("falsos");
console.log(!!"");
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo=false));
console.log(!!0);

console.log("finalizar");
console.log(!!('' || null || 0 || ' '));

let nome = '';

console.log (nome || "desconhecido");

nome = "fulano";
console.log (nome || "desconhecido");