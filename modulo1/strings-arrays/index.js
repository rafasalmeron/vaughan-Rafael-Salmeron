//Exercícios de interpretação de código

//1.
/*
a. Undefined 
b. NULL
c. 11
d. 3
e. Aqui vai imprimir toda a extensão do array e alterar a segunda posição que é '4' para '19'
f. 9
*/

//2
/*
Resposta: 
Será impresso: "SUBI NUM ÔNIBUS EM MIRROCOS" 27
*/

//Exercícios de escrita de Código

//1.
const nome = prompt("Digite seu nome:");
const email = prompt("Digite seu e-mail:");

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vindo(a) ${nome}`);

//2.
const comidas = ["Lasanha", "Macarrão", "Churrasco", "Hamburguer", "Pipoca"];
console.log("Array completo:", comidas);
console.log("Essas são as minhas comidas favoritas:");
console.log("1.", comidas[0]);
console.log("2.", comidas[1]);
console.log("3.", comidas[2]);
console.log("4.", comidas[3]);
console.log("5.", comidas[4]);

const escolha = prompt("Digite de 1 a 5 para substituir uma das comidas acima:")
const comidaU = prompt("Digite uma de suas comidas favorita:");
comidas[escolha -1] = comidaU; 
console.log(comidas);

//3.

let listaDeTarefas = [];

    const tarefa1 = prompt("Primeira tarefa");
    const tarefa2 = prompt("Segunda tarefa");
    const tarefa3 = prompt("Terceira Tarefa");

        listaDeTarefas.push(tarefa1);
        listaDeTarefas.push(tarefa2);
        listaDeTarefas.push(tarefa3);

console.log("Tarefas do dia", listaDeTarefas);

    const concluida = prompt("Selecione a Tafera concluída(1 a 3):");

        listaDeTarefas.splice(concluida -1, 1);

console.log("Tarefas pendentes", listaDeTarefas);

//Desafios

//1.
let frase = prompt('Digite uma frase:');
const fraseArray = frase.split(' ')
console.log(fraseArray);

//2.
let fruits = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
console.log("Impressão de indice:", fruits[2],"\n", "Impressão do tamanho do array:", fruits.length);