//Importação do Módulo(readline-sync)
const read = require('Readline-sync')

//Variáveis
let x, y, valor
console.clear()
console.log('==================================')
console.log('====  Cálculo de Porcentagem  ====')
console.log('==================================')
console.log("")

//Entrada
x = Number(read.question("Digite o Valor da Porcentagem: ").replace(",",".")) 
y = Number(read.question("Digite o valor a ser calculado: ").replace(",","."))

//Processamento
valor = (x/100)*y

//Saída
console.log(`${x}% de ${y} = ${valor}`)
