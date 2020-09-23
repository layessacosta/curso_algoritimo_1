var nome, nota1, nota2, nota3, nota4 ;
nome=prompt("Escreva seu nome") 

nota1=prompt("Escreva a nota 1 :")
 nota2=prompt("Escreva a nota 2: ")
 nota3=prompt("Escreva a nota 3:")
 nota4=prompt("Escreva a nota 4 :")

 resultado=(nota1+nota2+nota3+nota4)/4
if(nota1>nota2 && nota1 > nota3 && nota1 > nota4)
  alert("Nota 1 maior que as demais")
  if(nota2>nota1 && nota2>nota3 && nota2>nota4)
  alert("Nota 2 maior que as demais")
  if(nota3>nota1 && nota3>nota2 && nota3>nota4)
  alert("Nota 3 maior que as demais")
if(nota4>nota1 && nota4>nota2 && nota4>nota3)
alert ("Nota 4 maior que as demais") 



    