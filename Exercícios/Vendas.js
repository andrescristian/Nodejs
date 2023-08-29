/**
 * Exercício 6
 * Calcular o preço de venda de um produto em função do preço de custo e margem de lucro(%)
 * Exemplo:
 * Custo: 30,0 | Lucro: 50% | Venda: R$45,00
 */
//Importação do Módulo(readline-sync)
const read = require('Readline-sync')

//Variáveis
let custo, lucro, venda, n
console.clear()
console.log('========================================')
console.log('====== Cálculo de preço de venda =======')
console.log('===== Em Função do Preço de Custo ======')
console.log('========= e Margem de Lucro  ===========')
console.log("")

//Entrada
custo = Number(read.question("Digite o Custo: ").replace(".",","))
n = Number(read.question("Digite a Porcentagem: ").replace(".",","))

//Processamento
lucro = custo*(n/100)
venda = custo + lucro


//Saída
console.log(`O valor da sua Venda é: R$ ${venda}`)
