/**
 * Eleitor - Obrigatoriedade de Votação
 */
const read = require('Readline-sync')
const colors = require('colors')

console.clear()
console.log("")
console.log('=================================')
console.log('=====  Obrigatoriedade de  ======')
console.log('============ Votação ============')
console.log("")

let idade

idade = Number(read.question("Digite a Idade: ").replace(",", "."))

if(idade < 16){
    console.log("Você não pode votar!".red)
} else if ( 18 <= idade && idade <= 70){
    console.log("Você DEVE votar!".green)
} else if ( 16 >= idade < 18 || idade > 70){
    console.log("Seu voto é Facultativo!".blue)
}