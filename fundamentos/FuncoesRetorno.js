/**
 * Estudo da Funções
 * Funções com parâmetro e retorno
 */
//Observação: Funções não-atribuídas a Variáveis podem ser declaradas no fim do código
//Funções Atribuídas e "arrow function" precisam ser declaradas do início do código

// Sintaxe Comum
//Parametro é uma variavel
function somar(num1, num2) {
    return (console.log(num1 + num2))
}
//Para executar a Função, devemos passar 2 valores
somar(2, 5)

//Função Atribuída
let somarAtribuida = function (num1, num2) {
    return (console.log(num1 + num2))
}

somarAtribuida(5, 5)

//Arrow function
let somarArrowF = (num1, num2) => {
    return(console.log(num1 + num2))
}

somarArrowF(2, 2)