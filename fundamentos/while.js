/**
 * Estudo das Estruturas de Controle:
 * "while"
 * "do while"
 */
const read = require('Readline-sync')

let x = 1
let y = 1

while (x < 11) {
    console.log("Teste da Estrutura while")
    x++
}

read.question("Pressione a tecla [ENTER] para continuar")
console.clear()

do {
    console.log("Teste da Estrutura do-while")
    y ++
} while (y < 11)