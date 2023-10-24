/**
 * Exercício de Fixação - P.O.O
 */
const read = require('Readline-sync')
const colors = require('colors')

//Banco
class Conta {
    constructor(numero, titular, saldo) {
        this.numero = numero
        this.titular = titular
        this.saldo = saldo
    }

    exibirSaldo() {
        console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`)
    }

    depositar(valor){//valor é um parâmetro que não está no "constructor"
        this.saldo += valor
        console.log(`Crédito de: R$ ${valor.toFixed(2)}`)
    }

    sacar(valor){
        //Validação
        if(valor <= this.saldo){
            this.saldo -= valor
            console.log(`Débito de: R$ ${valor.toFixed(2)}`)
        } else {
            console.log("Saque não permitido")
        }
    }
}

class ContaPoupanca extends Conta{
    constructor(numero, titular, saldo){
        super(numero, titular, saldo)
    }

    exibirSaldoPoupanca(){
        console.log(`Saldo de Poupanca: R$ ${this.saldo.toFixed(2)}`)
    }
}

//Clientes
console.clear()
console.log("______             _           ")
console.log("| ___ \\           | |         ")
console.log("| |_/ / __ _ _ __ | | __       ")
console.log("| ___ \\/ _` | '_ \\| |/ /     ")
console.log("| |_/ / (_| | | | |   <        ")
console.log("\\____/ \\__,_|_| |_|_|\\_\\   ")
console.log("")

let cliente1 = new Conta(1, "Leandro Ramos", 10000)
cliente1.exibirSaldo()
console.log(`Cliente: ${cliente1.titular}       Conta: ${cliente1.numero}`)
cliente1.depositar(5000)
console.log("")
cliente1.exibirSaldo()
cliente1.sacar(8000)
cliente1.exibirSaldo()
cliente1.sacar(10000)
cliente1.exibirSaldo()

let clienteP = new ContaPoupanca(5001,"Leandro Ramos", 1000)
clienteP.exibirSaldoPoupanca()
