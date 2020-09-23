/*
numero, fatorial, contador :inteiro

Inicio
// Seção de Comandos, procedimento, funções, oper
    escreva("Escreva um numero para calcular o fatorial.")
    leia (numero)
    fatorial:= 1
    para contador de 1 ate numero faca
        fatorial:= fatorial * contador
  fimpara
    escreva("Escreva o fatorial de",numero ,"é :",fatorial)
  
Fimalgoritmo
*/

var valor01, valor02, resultado, operacao
function acaoBotao(params) {
 var numero, fatorial, contador
 numero=prompt ("Escreva um numero para calcular o fatorial.")
 fatorial= 1 
 for (contador = 1; contador<= numero; contador++) {
     fatorial= fatorial * contador

     
 }
   document.getElementById("paragrafo").innerText ="Escreva o fatorial de"+ numero + "e :"+ fatorial
}