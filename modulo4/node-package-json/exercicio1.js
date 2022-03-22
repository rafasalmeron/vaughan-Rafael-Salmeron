const nome = process.argv[2]
const idade = parseInt(process.argv[3])
const resultado = idade + 7
const red = '\u001b[31m';

if(nome && idade == false){
    console.log('Ficou faltando alguns dos parametros, verifique por favor, são necessários 1 nome 1 idade')
}
else {
    console.log(`${red} Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${resultado}`)
}


