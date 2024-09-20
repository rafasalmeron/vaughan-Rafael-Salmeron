const num1 = parseInt(process.argv[3])
const num2 = parseInt(process.argv[4])
const operacao = process.argv[2]
const blue = '\u001b[34m';


switch(operacao){
	case "add":
		resultado = num1 + num2;
		break;
	case "sub":
		resultado = num1 - num2;
		break;
    case "mult":
		resultado = num1 * num2;
		break;
    case "div":
		resultado = num1 / num2;
		break;
	default:
		resultado = console.log('Quantidade de parâmetros incorreta! Exemplo de como usar: (add/sub/mult/div, escolha uma dessas operações, em seguida os valores) 2 2')
		
}
console.log(`${blue} Resposta: ${resultado}`)

