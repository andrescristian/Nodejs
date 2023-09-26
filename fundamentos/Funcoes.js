/**
 * Estudo das Funções
 */

//Função Simples
console.clear()
function hello() {
    console.log("Hello function")
}

//Para executar uma Função, basta escrever o "Nome da Função" junto com Parênteses
hello()

//Funções Atribuídas
const hello2 = function () {
    console.log("Hello function atribuída")
}
hello2()

//Função Atribuída Simplificada (arrow function)
const hello3 = () => {
    console.log("Hello arrow function")
}
hello3()

console.log(typeof hello3)