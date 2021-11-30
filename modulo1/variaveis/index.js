//Interpretação de Código
/* 
1. irá imprimir na tela:
10
10 5
*/

/* 
2. irá imprimir na tela:
10 10 10 
*/

/*
3. sugerindo nome das variaveis
p = horasTrabalhadas
t = salarioDia
*/

//Escrita de Código

//1.
let nome
let idade
console.log(typeof idade, nome);
//Aqui é imprimido na tela 'undefined', exatamente porque não foi definido um valor a variável.
nome = prompt("Qual o seu nome?")
idade = prompt("Qual sua idade?")
console.log(typeof nome, idade)
//Aqui obtivemos como resultado as 'string' e '32'. Porque aqui foi adicionado um valor as variaveis.
console.log("Olá", nome, "você tem", idade, "anos.");

//2.
let a = prompt("Você gosta de video games?");
let b = prompt("Você tem filhos?");
let c = prompt("Você já deu a volta ao mundo?");
console.log("Você gosta de video games?", a);
console.log("Você tem filhos?", b);
console.log("Você já deu a volta ao mundo?", c);

//3.
let d = 10;
let e = 25;

let f = d;
d = e;
d = f;

console.log("O novo valor de a é:", d);
console.log("O novo valor de b é:", e);

//Desafio

let x = prompt("Digite o primeiro número.")
let y = prompt("Digite o segundo número.")
let x2 = Number(x)
let y2 = Number(y)
let soma = x2 + y2
let multiplicar = x2 * y2

console.log("O primeiro resultado é:", soma)
console.log("O segundo resultado é:", multiplicar)