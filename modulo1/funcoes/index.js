//Exercícios de Interpretação de código

//1.
/*
a) 10 50
b) Eu achava que seria a mesma coisa.(Com resalvas)
Na dúvida joguei no console e não me gerou nada.
*/

//2.
/*
a) Essa função tem duas utilidades, sendo assim,
ela faz o texto digitado pelo usuária ficar todo com letras minúsculas
e busca se foi digitado "cenoura" pelo usuário, retornando true ou false.

b)
i. eu gosto de cenoura true
ii. cenoura é bom pra vista false
iii. cenouras crescem na terra
*/

//Exercícios de Escrita de Código

//1.

// a)
function sobreMim(){
    console.log("Eu sou Rafael, tenho 32 anos, moro em Petrópolis-RJ e sou estudante da Labenu.");
};
const informações = sobreMim();

// b)
function sobreMimUsuario(nome, idade, cidade, ocupacao){
    console.log(`Oi, me chamo ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${ocupacao}`);
};
const informaçõesUsuario = sobreMimUsuario(prompt("Nome"), prompt("Idade"), prompt("Cidade"), prompt("Ocupação"));

// 2.
// a)
let somaArrow = (primeiroNumero, segundoNumero) => primeiroNumero + segundoNumero
console.log(somaArrow(5 , 3));

// b)
let boleano = (numero1, numero2) => numero1 >= numero2;
console.log(boleano(5, 5));   

//c
function numeroPar(fator1, fator2){
     return fator1 / fator2 === 0
};
console.log(numeroPar(5, 2));

//d
function mensagem_string(mensagem){
    return mensagem;
}
const newMessanger = mensagem_string("Não importa quanto tempo você tem, mas como você o usa - Ekko");
console.log(newMessanger.length, newMessanger.toUpperCase());

//3
function somar(s1, s2){
    return s1 + s2;
};
function subtrair(sub1, sub2){
    return sub1 - sub2;
};
function multiplicar(m1,m2){
    return m1 * m2;
};
function dividir(d1,d2){
    return d1 / d2;
};
const numeroInserido1 = Number(prompt("Digite um número para calcular"))
const numeroinserido2 = Number(prompt("Digite um número para calcular"))
console.log(somar(numeroInserido1, numeroinserido2), subtrair(numeroInserido1, numeroinserido2), multiplicar(numeroInserido1, numeroinserido2), dividir(numeroInserido1, numeroinserido2));

//Desafio

// 1.
// a)
const imprimir = valor => console.log(valor);

// b)
let somar = (x, y) => { 
    const soma = x + y
    imprimir(soma)
}
somar(6,8)
// 2.


