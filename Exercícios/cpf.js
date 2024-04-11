/**
 * Validação de cpf
 * @author Professor José de Assis
 */

const read = require('readline-sync')

let cpf, soma, resto, dv1, dv2

console.clear()
console.log("Validação de CPF >>>")
cpf = read.question("Digite o CPF: ")
if (cpf.length !== 11 || cpf === "00000000000" || cpf === "11111111111" || cpf === "22222222222" || cpf === "33333333333" || cpf === "44444444444" || cpf === "55555555555" || cpf === "66666666666" || cpf === "77777777777" || cpf === "88888888888" || cpf === "99999999999") {
    console.log("CPF inválido")
} else {
    //Cálculo do primeiro dígito verificador
    soma = 0
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i)
    }
    resto = 11 - (soma % 11)    
    if (resto === 10 || resto === 11) {
        dv1 = 0
    } else {
        dv1 = resto
    }
    //Cálculo do segundo dígito verificador
    soma = 0
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i)
    }
    resto = 11 - (soma % 11)    
    if (resto === 10 || resto === 11) {
        dv2 = 0
    } else {
        dv2 = resto
    }
    //comparar os dígitos verificadores
    if (parseInt(cpf.charAt(9)) !== dv1 || parseInt(cpf.charAt(10)) !== dv2) {
        console.log("CPF inválido")
    } else {
        console.log("CPF válido")
    }
}