// Exercícios de interpretação de código

// 1.
/*
 Está incrementando i com mais um até que não seja mais menor do que 5, e abaixo vai atribuir um novo valor a variavél 'valor' a cada incremento e somando o valor de i a cada vez que até completar o loop.
 O resultado é 10, o que é basicamente 5+5. (0+0=0,0+1=1, 1+2=3,      3+3=6, 6+4=10 "encerrando o loop porque a condição é ser menor que 5")
*/

// 2.
// a)
/*
Todos os números maiores que 18, que no caso são: 19, 21, 23, 25, 27, 30
*/
// b)
/*
Para imprimir, por exemplo, poderia mudar o 18 por 0. Já iria imprimir todos. Acho que foi isso que queriam dizer.
*/

// 3.
// a)
//Caso digite 4 será impreso 4 asteristicos = * ** *** ****

// Exercícios de escrita de código
// 1.
const quantidadeBixos = Number(prompt("Quantos?"))
const nomesBixos = []
if(quantidadeBixos === 0){
    console.log("Que pena!")
} else {
    for(let i = 0; i < quantidadeBixos; i++){
        const nomeDosBixos = prompt("Nome")
        nomesBixos.push(nomeDosBixos)
    }

}
console.log(nomesBixos)

// 2.
const array_original = [10,15,20,25,30]
// a)
for (i = 0; i < array_original.length; i++)
    console.log(array_original[i])
// b)
for (i = 0; i < array_original.length; i++){ 
     let numero_dividido = array_original[i]
    console.log(numero_dividido / 10)
}
// c)
for (i = 0; i < array_original.length; i++){
    let pares_do_array = array_original[i]
    if(pares_do_array %2 === 0){
        console.log(pares_do_array)
    }
} 
// d)
for (i = 0; i < array_original.length; i++){
    let numero_do_array = array_original[i]
    console.log(`O elemento do índex ${i} é: ${numero_do_array}`)
}
// e)
function test (array_de_num){
let maior_numero = 0
let menor_numero = 10
    for(let i = 0; i < array_original.length; i++){
        if(maior_numero < array_de_num[i]){
            maior_numero = array_de_num[i]
        }
    for(let i = 0; i > array_original.length; i--){
        if(menor_numero > array_de_num[i]){
            menor_numero = array_de_num[i]
        }        
        }    
    }
    return `O maior número é ${maior_numero} e menor número é ${menor_numero}`
}
console.log(test(array_original))
