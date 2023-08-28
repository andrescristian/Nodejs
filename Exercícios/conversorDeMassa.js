/**
 * Exercício 5
 * Conversão de Libras em Kilo
 */
const read = require('Readline-sync')

//Variáveis
let libra, kilo
console.clear()
console.log("_  ___ _                 _     _ _ ")                   
console.log("| |/ (_) | ___          | |   (_) |__  _ __ __ _ ___") 
console.log("| ' /| | |/ _ \   _____  | |   | | '_ \| '__/ _` / __| ")
console.log("| . \| | | (_) | |_____| | |___| | |_) | | | (_| \__ \ ")
console.log("|_|\_\_|_|\___/            |_____|_|_.__/|_|  \__,_|___/ ")
console.log("")                                                      

//Entrada
libra = Number(read.question("Digite o valor de Libras: ").replace(",","."))

//Processamento
kilo = libra/2.20462

//Saída
console.log(`O valor de conversão de Libras para Kilo é: ${kilo.toFixed(2)} Kg`)

