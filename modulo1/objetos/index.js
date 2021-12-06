// Exercícios de interpretação de código

// 1. 
// a)
/* 
Matheus Nachtergaele
Virginia Cavendish
canal: Canal Brasil horario: 19h
*/

// 2.
// a)
/*
nome: Juca, idade: 3, raca: SRD
nome: Juba, idade: 3, raca: SRD
nome: Jubo, idade: 3, raca: SRD
*/

// b)
/*
Essa sintaxe se chama Spread e faz uma cópia do objeto
podemos assim alterar ou adicionar "elementos".
*/

// 3.
// a)
/*
Eu precisei colocar o código para rodar para ficar mais claro para mim.
o resultado foi: false
                 undefine
*/

// b)
/*
Pude entender que foi dado o valor de 'backender' e
como 'altura' não foi definida no objeto teve como
resultado indefinido.
*/

// 1.
// a)
const pessoa = {
    nome: "Rafael",
    apelidos: ["Lord", " Rafa", " ElRafa"], 
    };

    const chamar = (pessoa) => {
        console.log(`Eu sou ${pessoa.nome},
mas pode me chamar de: ${pessoa.apelidos}.`)
    };

chamar(pessoa);


// b) 
const pessoa_alteracao_apelido = {
    ...pessoa,
    apelidos: ["Rato", " Fael", " Lordinho"],
};
chamar(pessoa_alteracao_apelido);

// 2.
// a)
const famoso1 = {
    nome: "Einstein",
    idade: "Falecido",
    profisao: "Cientista"
};

const famoso2 = {
    nome: "Keanu Reeves",
    idade: 57,
    profisao: "Ator"
};

// b)
const imprimir_informaçoes = () => {
    console.log([famoso1.nome, famoso1.nome.length, famoso1.idade, famoso1.profisao, famoso1.profisao.length]);   
    console.log([famoso2.nome, famoso2.nome.length, famoso2.idade, famoso2.profisao, famoso2.profisao.length]);
};

imprimir_informaçoes();

// 3.
// a)
const carrinho = [];
// b)
const fruta1 = {
    nome: "Banana",
    disponibilidade: true
};
const fruta2 = {
    nome: "Uva",
    disponibilidade: false
};
const fruta3 = {
    nome: "Abacate",
    disponibilidade: true
};
// c)
const pegar_frutas = (carrinho) => {
    return carrinho.push(fruta1, fruta2, fruta3)
};
pegar_frutas(carrinho);
// d)
console.log(carrinho)

//Desafio
// 1.
const informacoes_pessoais = () => {
    const nome = prompt("Digite seu nome: ")
    const idade = Number(prompt("Digite sua idade: "))
    const profissao = prompt("Digite sua profissão: ")

    const pessoa = {
        nome: nome,
        idade: idade,
        profissao: profissao
    }

    console.log(typeof pessoa)

    return pessoa
}

console.log(informacoes_pessoais())

