//armazenando uma funcao em uma constante
const imprimirSoma = function(a = 0,b = 0){
    console.log(a+b);
}
imprimirSoma()
imprimirSoma(99,1)
//armazenando funcao arrow em uma variavel

const soma = (a = 0,b = 0) => {
    return a + b;
}
console.log(soma(1,2));
imprimirSoma(soma(2,5));

//retorno implicito
const subtracao = (a,b) => a - b;
console.log(subtracao(2,3));

const imprimir2 = a => console.log(a);

imprimir2("boa noite");