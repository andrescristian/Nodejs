/**
 * Conversor de Temperatura
 * Fahrenheit para Celsius
 */
//Importação do Módulo(readline-sync)
const read = require('Readline-sync')
//Variáveis
let c,f
console.clear()
console.log('==================================')
console.log('==== Conversor de Temperatura ====')
console.log('==== Fahrenheit para Celsius  ====')
console.log('==================================')
console.log("")
//Entrada
f = Number(read.question("Digite a temperatura em Fahrenheit: ").replace(",","."))
//Processamento
c = (f-32) / 1.8
//Saída
console.log(`Temperatura em Celsius: ${c.toFixed(1)}ºC`)
