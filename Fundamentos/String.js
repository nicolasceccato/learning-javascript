const nomeDeUmaEscola = "Esse é o nome da escola 123456";

console.log(nomeDeUmaEscola);
console.log(nomeDeUmaEscola.charAt(5));//retorna o setimo char da string. Começando de 0 e contando os espaços
console.log(nomeDeUmaEscola.charCodeAt(1));//retorna o valor da tabela unicode para o termo na posição indicada
console.log(nomeDeUmaEscola.indexOf("a"));//retorna o indice onde encontra o valor indicado
console.log(nomeDeUmaEscola.substring(5));//cria uma substring a partir do index indicado
console.log(nomeDeUmaEscola.substring(5,10));//cria uma substring a partir do index indicado até o anterior o segundo valor. Vai do primeiro indice na quantidade dada pela diferença entre os indices
console.log("Escola: ".concat(nomeDeUmaEscola.concat("!!!!")));
console.log("Escola: "+nomeDeUmaEscola+"!!!!");
console.log(nomeDeUmaEscola.replace('E', 'x'));
console.log(nomeDeUmaEscola.replace(/\d/g, 'x'));
console.log(nomeDeUmaEscola.replace(/\w/g, 'x'));

console.log("Ana, Maria, Pedro".split(','));