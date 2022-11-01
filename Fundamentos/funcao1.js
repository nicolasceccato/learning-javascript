// função sem retorno

function imprimirSoma(a, b){
    console.log(a+b);
}

imprimirSoma(2,3);

imprimirSoma(2);

imprimirSoma();

// função com retorno

function soma (a = 10, b = 20){
    return a + b;
}

let a = soma (-5,-9);
console.log(a);