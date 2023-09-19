/**
 * Exemplo de uso do laço "for"
 */
console.clear()
console.log('=================================')
console.log('============ Tabuada ============')
console.log('=================================')
console.log("")

const read = require('readline-sync')


let valor = Number(read.question("Digite o valor da tabuada: "))

for (let i = 1; i < 11; i++) {
    console.log(`${valor} x ${i} = ${i * valor}`)
}