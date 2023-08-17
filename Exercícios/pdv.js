const read = require('Readline-sync')

let total, valor, desconto
console.clear()
console.log("    {_______  {_____    {__         {__ ")
console.log("    {__    {__{__   {__  {__       {__  ") 
console.log("    {__    {__{__    {__  {__     {__   ")
console.log("    {_______  {__    {__   {__   {__    ") 
console.log("    {__       {__    {__    {__ {__     ") 
console.log("    {__       {__   {__      {____      ")
console.log("    {__       {_____          {__       ") 
console.log("")

//entrada 1
valor = Number(read.question("Digite o valor total da compra: ").replace(",","."))
desconto = Number(read.question("Digite o Valor do Desconto em %: ").replace(",","."))

//Processamento
total = valor - ((desconto*valor) / 100)

//Saída 1
console.log(`Total: R$ ${total.toFixed(2)}`)
console.log("")
console.log("--------------------------------")

//Entrada 2
dinheiro = Number(read.question("Digite o valor pago em dinheiro: "))

//Processamento 2
troco = dinheiro - total

//Saída 2
console.log(`Troco: R$ ${troco.toFixed(2)}`)