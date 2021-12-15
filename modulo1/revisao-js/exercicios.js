// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    const arr = array;
    return arr.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    // //Primeiro teste
    // const arr = array;
    // return arr.reverse();

    //Desafio
    let arr = array;
    let length = arr.length;
    let first = null;
    let last = null;
    for (first = 0, last = length - 1; first < last; first += 1, last -= 1) {
        let temporary = arr[first];
        arr[first] = arr[last];
        arr[last] = temporary;
    };
    return arr;
};

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    //Primeiro modo
     const arr = array;
    // arr.sort(function(aa,bb){
    //     if(aa > bb){ 
    //         return 1;
    //     }
    //     if(aa < bb) {
    //         return -1;
    //     }
    // });
    // return arr

    //Desafio
    for (let i = 0; i < arr.length; i++) {

		for (j = 0; j < arr.length - 1; j++) {

			if (arr[j] > arr[j + 1]) {

				let temporary = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temporary;
			};
		};
	};
    return arr;
};

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const arrPar = array.filter((arr2)=>{
      return arr2 %2 == 0
  })
  return arrPar

    //Desafio
    
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const arrPar = array.filter((arr2)=>{
        return arr2 %2 == 0
    }).map((arr2)=>{
        return arr2**2
    })
    return arrPar
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    const maioresDoQue10 = array
    return Math.max(...maioresDoQue10)
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}