//Hora Técnica de Serviço - TI
const read = require('Readline-sync')

//Variáveis
let remuneracao, custo, horasMes, horaTecnica, estimativa, total
console.clear()
console.log('==================================')
console.log('====  Cálculo da Hora Técnica ====')
console.log('==================================')
console.log("")

//Entrada 1
remuneracao = Number(read.question("Digite o Valor da Remuneracao Mensal: ").replace(",",".")) 
custo = Number(read.question("Digite o Valor do Custo Operacional: ").replace(",","."))
horasMes = Number(read.question("Digite o Valor da Hora por Mes: ").replace(",","."))
estimativa = Number(read.question("Digite o Valor da Estimativa de Horas: ").replace(",", "."))


//Processamento
horaTecnica = (remuneracao + (remuneracao * 0.3) + custo + (remuneracao * 0.2)) / horasMes

//Processamento 2
total = horaTecnica * estimativa

//Saída 1
console.log(`O Valor da Hora de Serviço é R$ ${horaTecnica.toFixed(3)}`)
console.log(`O Valor Total será: R$ ${total}`)
