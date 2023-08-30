/**
 * App "Etanol Vs Gasolina"
 */

//Pacote usado para entrada de dados via terminal
const read = require('readline-sync')
//Pacote usado para formatar textos no Console
const colors = require('colors')

let etanol, gasolina

console.clear()
console.log("________                 ___   __    _____               __")
console.log("/// __/ /____ ____  ___  / / | / /__ / ___/__ ____ ___  / (_)__  ___ _ ")
console.log("// _// __/ _ `/ _ \/ _ \/ /| |/ (_-</ (_ / _ `(_-</ _ \/ / / _ \/ _ `/")
console.log("/___/\__/\_,_/_//_/\___/_/ |___/___/\___/\_,_/___/\___/_/_/_//_/\_,_/ ")

console.log("")

etanol = Number(read.question("Digite o Valor do Etanol: ").replace(",", "."))
gasolina = Number(read.question("Digite o Valor da Gasolina: ").replace(",", "."))

if (etanol < 0.7 * gasolina) {
    console.log("Abastecer com Etanol".green)
} else {
    console.log("Abastecer com Gasolina".red)
}

