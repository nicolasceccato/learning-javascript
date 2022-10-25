const peso1 = 0.8;
const peso2 = Number ('2.2');

console.log(peso1,peso2);

console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1*peso1 + avaliacao2*peso2;

const media = total/(peso1+peso2);

console.log(media.toFixed(2));
console.log(media.toString());//convertendo p string

console.log(media.toString(2));//convertendo p binário

const a = 5
console.log(a.toString(2));