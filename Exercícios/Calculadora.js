/**
 * Estudo das Funções - Calculadora
 */
const read = require('readline-sync')
const colors = require('colors')
console.clear()
console.log("Calculadora\n")//O "\n" pula uma linha em qualquer Linguagem
console.log("1 - Somar")
console.log("2 - Subtrair")
console.log("3 - Multiplicar")
console.log("4 - Dividir")
console.log("5 - Porcentagem")

let opcao = Number(read.question("Digite a opcao desejada: ").replace(",", "."))
//Melhorando a experiência do usuário

if (opcao < 1 || opcao > 5) {
    console.log("Opcao invalida")
    process.exit([0]) //Encerra o aplicativo no console 
}

console.clear()

let num1 = Number(read.question("Digite o primeiro valor: ").replace(",", "."))
let num2 = Number(read.question("Digite o Segundo valor: ").replace(",", "."))



switch (opcao) {
    //Executar as Funções "somar", "subtrair", "multiplique" e "divida"
    case 1:
        somar(num1, num2)
        break

    case 2:
        subtrair(num1, num2)
        break

    case 3:
        multiplique(num1, num2)
        break

    case 4:
        divida(num1, num2)
        break

    case 5:
        porcentagem(num1, num2)
        break

}

//Função Somar
//Observação: Funções não-atribuídas a Variáveis podem ser declaradas no fim do código
//"Funções Atribuídas" e "arrow function" precisam ser declaradas do início do código

function somar(num1, num2) {
    return (console.log(`A soma de ${num1} + ${num2} = ${num1 + num2}`))

}

function subtrair(num1, num2) {
    return (console.log(`A subtracao de ${num1} - ${num2} = ${num1 - num2}`))
}

function multiplique(num1, num2) {
    return (console.log(`A Multiplicação de ${num1} x ${num2} = ${num1 * num2}`))
}

function divida(num1, num2) {
    //É uma validação
    if (num2 === 0) {
        console.log("Impossivel divisao por zero")
        process.exit([0]) //Encerra o aplicativo no console 
    } else {
        console.log(`A Divisão de ${num1} / ${num2} = ${num1 / num2}`)

    }
}

function porcentagem(num1, num2) {
    return (console.log(`${num1} % de ${num2} = ${num1 / 100 * num2}`))
}
