/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!");

if (confirm("Quer  iniciar uma nova rodada?")){
   const carta_usuario_1 = comprarCarta();
   const carta_usuario_2 = comprarCarta();
   
   const carta_computador_1 = comprarCarta();
   const carta_computador_2 = comprarCarta();

   const pontos_usuario = carta_usuario_1.valor + carta_usuario_2.valor;
   const pontos_computador = carta_computador_1.valor + carta_computador_2.valor;
   
   console.log(`Cartas do Usuário: ${carta_usuario_1.texto} ${carta_usuario_2.texto} - ${pontos_usuario}`);
   console.log(`Cartas do Computador: ${carta_computador_1.texto} ${carta_computador_2.texto} - ${pontos_computador}`);
   if (pontos_usuario > pontos_computador){
      console.log("O Usuário Venceu!");
   } else if (pontos_computador > pontos_usuario){
      console.log("O Computador Venceu!");
   } else if (pontos_usuario === pontos_computador){
      console.log("Deu empate!");
   }
}  else {
   console.log("O Jogo Terminou.")
};
   