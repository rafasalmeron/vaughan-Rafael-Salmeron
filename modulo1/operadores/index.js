//Exercícios de interpretação de código


//1.
/*
a. false
b. false
c. true
d. boleano
*/


//2.
/*
Nesse caso está faltando uma conversão de string para Number,
entendendo que sempre que pedimos prompt ele é atribuido como uma string,
o que irá ocorrer é um concatenação.

*/

//3.
/*
Uma forma de resolver é:
*/
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)


//Exercícicos de escrita de código

//1.

const idade = Number(prompt("Qual a sua idade?"));
const idadeAmigo = Number(prompt("Qual a idade do seu Melhor amigo?"));
console.log("Minha idade é maior do que a do meu Amigo?", idade > idadeAmigo);
console.log("A diferença de idade entre os dois é: ", idade-idadeAmigo, "anos");


//2.

let numeroPar = Number(prompt("Insira um número Par.(ex.: 2,4,6,8,10..."));
console.log("O resto da divisão é: ", numeroPar % 2);
//c.
/* O padrão é que sempre é dado como resultado: 0*/
//d.
/*Caso seja inserido um número ímpar o resultado mudará, dando um resultado diferente de 0*/


//3.
/*Sem contar os anos bissextos*/
const idadeAnos = Number(prompt("Me diga a sua Idade."));
console.log("Idade do usuário em meses:", idadeAnos * 12);
console.log("Idade do usuário em dias:", idadeAnos * 365);
console.log("A idade do usuário em horas:", (idadeAnos * 365) * 24);


//4.
const n1 = Number(prompt("Digitar o primeiro Número:"));
const n2 = Number(prompt("Digitar o segundo Número:"));

console.log("O primeiro número é maior que o segundo?", n1 > n2);
console.log("O primeiro número é igual ao segundo?", n1 === n2);
console.log("O primeiro número é divisível pelo segundo?", (n1 % n2) === 0);
console.log("O segundo número é divisível pelo primeiro?", (n2 % n1) === 0);

//Desafios

//1.

const F = (77 -32) * 5/9 + 273.15;
console.log("Conversão de 77°F em °K é:", F, "°K");
const C = (80 * 9/5) + 32;
console.log("Conversão de 80°C em °F é:", C,"°F");
let c = 30;
console.log("Conversão de 30°C em °F e °K é, respectivamente:", (c * 9/5) + 32,"°F", "e", c + 273.15,"°K");
c = Number(prompt("Digite a temperatura em °C que queria calcular:"))
console.log("Conversão de °C indicada pelo usuário em °F e °K é, respectivamente:", (c * 9/5) + 32,"°F", "e", c + 273.15,"°K");

//2.

const kWh = 280;
console.log("O valor a ser pago por uma casa que consuma 280kWh é:", kWh * 0.05);

console.log("O valor a ser pago com desconto de 15% é:", (kWh * 0.05) - (15/100));

//3.

const lb = 20 / 2.205;
console.log("20lb equivalem a", lb,"kg");

const oz = 10.5 / 33.594;
console.log("10,5oz equivalem a:", oz,"kg");

const mi = 100 * 1609;
console.log("100mi equivalem a:", mi,"m");

const ft = 50 / 3.281;
console.log("50ft quivalem a:", ft,"m");

const gal = 103.56 * 3.785;
console.log("103,56gal equivalem a:", gal,"l");

let xic = 450 / 3.52;
console.log("450 xic equivalem a:", xic,"l");

xic = Number(prompt("Insira a quantidade em xicara para converter para Litros:"))
console.log(xic,"xic equivalem a:",(xic / 3.52),"l");
