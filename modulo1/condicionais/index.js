// Exercícios de Interpretação de Código

// 1.
/*
a) Ele pede que o usuário digite um número,
depois converte ele a string para Number
e depois faz uma verificação utilizadno if/else
para ver se os números são iguais

b) Passam nos testes os números pares,
pela verificação da sobre de uma divisão.

c) Números ímpares não passam no teste, ou seja,
números que divididos por 2 resultam em algum resto de divisão.
*/

// 2.
/*
a) O usiário "Escolhe" uma fruta, e é feita uma verificação
e após isso é imprimido no console a fruta e o valor dela.

b) A mensagem impressa será:
O preço da fruta Maça é R$ 2.25

c) O console iá imprimir:
O preço da fruta Pêra é R$ 5.5
O preço da fruta é R$ 5
*/

// 3.
/*
a) A primeira linha pede ao usuário que digite um núemero,
ao mesmo tempo que o converte em Number

b) Considerando a lógica dos números -10 é menor do que 0, logo, é false a verificação.
O terminal não retornará nada.

c)Não vejo erro, mas creio que "console.log(mensagem)" não faz sentido.
talvez ela funcione se a verificação der certa.
ou não, acabei de testar. kkk
se o número passar tudo corre bem, se não passar gera erro, 
exatamente porque a "mensagem" não 'existe'
*/

// Exercícios de Escrita de Código

// 1.
// a)
const solicitar_idade = Number(prompt("Por favor, Digite a sua Idade: "))
// b)
const idade = (Maior_de_idade) => {
    // c)
    if (Maior_de_idade > 18){
        console.log("Você já pode tirar a sua Habilitação(CNH)")
    } else {
        console.log("Desculpe, você ainda não pode tirar a sua Habilitação(CNH)");
    }
}
idade(solicitar_idade)

// 2.
const verificar_turno = () => {
    let solicitar = prompt("Por favor, informe qual seu turno de estudo. M = Matutino, V = Vespertino, N = Noturno ")
    if (solicitar == "M" ){
        console.log("Bom dia!")
    } else if (solicitar == "V"){
        console.log("Boa tarde!")
     } else if (solicitar == "N") {
         console.log("Boa noite")
     } else {
        console.log("Você Digitou uma opção inválida.")
     }
     return 
} 

verificar_turno()

// 3.
const turno_informado = prompt("Por favor, informe qual seu turno de estudo. M = Matutino, V = Vespertino, N = Noturno ")

switch (turno_informado) {
    case "M":
        console.log("Bom dia!")
        break;
    case "V":
        console.log("Boa tarde!")
        break;
    case "N":
        console.log("Boa noite!")
        break;
    default:
        console.log("Opção inválida!")
}

// 4.
const genero_filme = prompt("Qual será o gênero do filme?")
const preco_ingresso = Number(prompt("Qual o valor do ingresso?"))
const verificar_escolha = (genero, valor) => {
    if (genero = "fantasia" && valor < 15 ){
        console.log("Bom Filme!")
    } else {
        console.log("Escolha outro filme :(")
    }
}

verificar_escolha(genero_filme, preco_ingresso)

// Desafio
// 1.
const genero_filme = prompt("Qual será o gênero do filme?")
const preco_ingresso = Number(prompt("Qual o valor do ingresso?"))
const verificar_escolha = (genero, valor) => {
    if (genero = "fantasia" && valor < 15 ){
       const lanche = prompt("Qual lanche vai acompanhar o filme?")
        console.log(`Bom filme e aproveite sua ${lanche}`) //Obvio que é pipoca né gente kkkk Por isso coloquei "Sua"
    } else {
        console.log("Escolha outro filme :(")
    }
}

verificar_escolha(genero_filme, preco_ingresso)

// 2.
/*

const dados_da_compra = {
    nome: prompt("Digite seu nome: "),
    jogo: prompt("Qual será o jogo que irá assistir? internacional, Nacional"),
    etapa: prompt("Qual estapa? Semi-Final, Decisão-Terceiro-Lugar, Final"),
    categorias: Number(prompt("Qual a categoria da ,partida? opções: 1, 2, 3 ou 4")),
    ingressos: Number(prompt("Quantos ingressos?"))
}

const categoria1 = {
    semifinais: 1320.00,
    decisão3: 660.00,
    final: 1980.00
}
const categoria2 = {
    ...categoria1,
    semifinais: 880.00,
    decisão3: 440.00,
    final: 1320.00
}
const categoria3 = {
    ...categoria1,
    semifinais: 550.00,
    decisão3: 330.00,
    final: 880.00
}
const categoria4 = {
    ...categoria1,
    semifinais: 220.00,
    decisão3: 170.00,
    final: 330.00
}

const gerando_compra = () => {
    console.log("---Dados da Compra---")
    console.log(`Nome do Cliente: ${dados_da_compra.nome}`)
    console.log(`Tipo de Jogo: ${dados_da_compra.jogo}`)
    console.log(`Etapa do Jogo: ${dados_da_compra.etapa}`)
    console.log(`Categoria: ${dados_da_compra.categorias}`)
    console.log(`Quantidade de Ingressos: ${dados_da_compra.ingressos}`)
    console.log("---Valores---")
    if (dados_da_compra.jogo === "Nacional" && dados_da_compra.categorias === 1 && dados_da_compra.etapa === "Semi-Final"){
        console.log(`Valor do ingresso: ${categoria1.semifinais}
Valor Total: ${categoria1.semifinais} * ${dados_da_compra.ingressos}`)
    } else if (dados_da_compra.jogo === "Nacional" && dados_da_compra.categorias === 1 && dados_da_compra.etapa === "Decisão-Terceiro-Lugar"){
        console.log(`Valor do ingresso: ${categoria1.decisão3}
Valor Total: ${categoria1.decisão3} * ${dados_da_compra.ingressos}`)
    } else if (dados_da_compra.jogo === "Nacional" && dados_da_compra.categorias === 1 && dados_da_compra.etapa === "Final"){
        console.log("Valor do ingresso: ",categoria1.final,
"Valor Total: ", categoria1.final * dados_da_compra.ingressos)
    }
}

gerando_compra()

*/