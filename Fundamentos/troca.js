let a  = 7;

let b = 94;

let c;
console.log(typeof c);
c = a;
a = b;
b = c;
console.log(typeof c);
console.log("a: " + a);
console.log("b: " + b);

[a,b] = [b,a];
console.log("a: " + a);
console.log("b: " + b);


