// Isto é um comentário em JS
/*Comentário de múltiplas 
linhas em JS
Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mim que vai caçá sua turmis! Cevadis im ampola pa arma uma pindureta. Quem num gosta di mé, boa gentis num é. Detraxit consequat et quo num tendi nada.*/

// usando 
// atalho 
// de comentários (ctrl+/ em Windows)
//Saidas de dados pelo console
// console.log(10)
// console.log("Hello World!")

//Variáveis são espaços reservados em memória para almacenar dados

var n1 = 10 // variável mutável
let n2 = 5  // variável mutável
const pi = 3.14 // variável imutável

console.log(n1)
console.log(n1+n2)

var raio = 10 // área do círculo = pi*raioˆ2= pi*raio*raio 
console.log(pi*raio*raio)

//Tipos de Variáveis
//String - São texto "puro"

// var nome = "David"
console.log(nome)

//Numbers - São números: Integer(inteiros), Float e Double (decimais)

var n3 = 20
var n4 = 5.5
console.log(n3+n4)

//Booleans - Operadores booleanos (true ou false, ou seja verdadeiro ou falso)

var tenhoDinheiro = true

console.log(tenhoDinheiro)

//Arrays - é uma estrutura de dados para armazenar coleções de valores

var capitaisDoBrasil = ["São Paulo", "Distrito Federal", "Salvador"]

console.log(capitaisDoBrasil[1])
console.log(capitaisDoBrasil[0])

//Objects
// Null
// NaN
// Undefined



var nome = "David"
var idade = 43

// concatenação
console.log("Sou " + nome + " e tenho " + idade +"anos")
//Template String
console.log(`Sou ${nome} e tenho ${idade} anos de juventude `)
/*
 operadores matemáticos

+ Adição
- Subtração
* Multiplicação
/ Divisão
% Resto da Divisão
++ Incremento
-- Decremento
*/

console.log(10+20)
console.log(3 * 25 + 3)
console.log(10%2)
console.log(10%3)

var numero = 10
numero ++
console.log(`O incremento de 10 é ${numero}`)

/* Operadores de atribuição

= atribui um valor a uma variável

( var numero2 = 5 )

+= , -=, *=, /=, %=

*/

var numero2 = 5
numero2 += 10

console.log(` A soma com atribuição de 10 e numero2 é igual a ${numero2}`)

/* Operadores relacionais

== igual a (é o igual da matemática)
<> ou != diferente de
=== Igual é  do mesmo Tipo
!== Valores e tipos diferentes
> , < , >= , <= Maior, menor, maior ou igual, menor ou igual
*/
console.log( 2 == '2')
console.log( 2 === '2')

/* Operadores lógicos

! NOT (negação)
&& AND (e, conjunção)
|| OR (ou, disjunção)

*/console.log('Operadores lógicos, &&')
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)
console.log('Operadores lógicos, ||')
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)
 
 //Função: é um bloco de código para executar uma tarefa específica. Uma função é executada quando algo a invoca (chama)

 //Função sem parâmetros
 function dividir(){
   console.log(`6 dividido por 2 é igual a ${6/2}`)
 }

 dividir()

 //Função com passagem de parâmetros

 function multiplicar(nume1,nume2){
   console.log(nume1 *nume2)
 }

 multiplicar(250,4)

 //Função com passagem de parâmetros

 function subtrair(nume1,nume2){
   return nume1 - nume2
 }

 var resultadoDaSubtracao = subtrair(300,250)

 console.log(`O resultado é ${resultadoDaSubtracao}`)



