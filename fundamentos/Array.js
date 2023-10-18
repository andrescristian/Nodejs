/**
 * Criando a Variável Composta "Array"
 * O "Array" é um Tipo de Dado Especial que, diferente das Variáveis Simples(var/let/const), guarda uma lista de valores que se relacionam entre si
 * Variáveis Simples    --> Guarda apenas 1 Valor
 * Variável Composta    --> Guarda vários Valores
 */
const times = ["Palmeiras", "Santos", "Milan", "Barcelona"]
console.log(times[0])//Palmeiras com Índice 0
console.log(times[1])//Santos com índice 1
console.log(times[2])//Milan com Índice 2
console.log(times[3])//Barcelona com Índice 3
console.table(times) //Mostra uma Tabela com os Índices e seus devidos Valores
console.log(times)   //Mostra os valores do Array

//Array Multidimensional
const notas = [[1,2,3,4],[4,6,7,2]]
console.log(typeof notas)//Array é um Objeto
console.log(notas)

//Cada Array tem sua Linha correspondente: o 1º colchetes é da lista de Array; o 2º é do Índice dessa lista escolhida
//1º Lista = Valor 0
//2º Lista = Valor 1 

console.log(notas [1][0])
// 1 = Mostra que vai buscar na 2º lista de Array
// 0 = Mostra que vai pegar o Índice "0" desssa 2º lista escolhida

console.table(notas)