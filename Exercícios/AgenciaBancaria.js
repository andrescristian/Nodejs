/**
 * Exercício de Fixação - P.O.O
 */
const read = require('readline-sync')//12 saldoCorrente
const colors = require('colors')

console.clear()
console.log("______             _                 ___                  _____           _       _    ".green)
console.log("| ___ \\           | |               |_  |                /  ___|         (_)     | |   ".green)
console.log("| |_/ / __ _ _ __ | | __  ______      | | __ ___   ____ _\\ `--.  ___ _ __ _ _ __ | |_  ".green)
console.log("| ___ \\/ _` | '_ \\| |/ / |______|     | |/ _` \\ \\ / / _` |`--. \\/ __| '__| | '_ \\| __| ".green)
console.log("| |_/ / (_| | | | |   <           /\\__/ / (_| |\\ V / (_| /\\__/ / (__| |  | | |_) | |_  ".green)
console.log("\\____/ \\__,_|_| |_|_|\\_\\          \\____/ \\__,_| \\_/ \\__,_\\____/ \\___|_|  |_| .__/ \\__| ".green)
console.log("                                                                           | |         ".green)
console.log("                                                                           |_|         ".green)
console.log("                       Bem-vindo ao seu Banco Virtual JavaScript".yellow)
read.question()

class Conta {
    constructor(numero, nome, saldoCorrente) {
        let _numero = numero
        let _nome = nome
        this.saldoCorrente = saldoCorrente

        this.getNumero = () => {
            return _numero
        }
        this.setNumero = (novoNumero) => {
            _numero = novoNumero
        }

        this.getNome = () => {
            return _nome
        }
        this.setNome = (novoNome) => {
            _nome = novoNome
        }

        this.getSaldoCorrente = () => {
            return _saldoCorrente
        }
        this.setSaldoCorrente = (novoSaldoCorrente) => {
            _saldoCorrente = novoSaldoCorrente
        }

    }

    informacoesPessoais() {
        console.log("Nome:         ".blue + `   ${this.getNome()}`)
        console.log("Cliente de Nº:".blue + `   ${this.getNumero()}`)
        console.log("Saldo Atual:  ".blue + `   R$ ${this.saldoCorrente}`)
    }

    exibirSaldo() {
        console.log("Saldo atual:".blue + ` R$ ${this.saldoCorrente.toFixed(2)}`)
    }

    servicos() {
        console.log("1 - Depósito".blue)
        console.log("2 - Saque".blue)
        console.log("3 - Transferencia via Pix entre Contas Correntes".blue)
        console.log("4 - Transferencia da Conta Corrente para Conta Poupanca".blue)
    }

    depositar(dinheiro) {
        dinheiro += this.saldoCorrente
        console.log("Saldo após o Depósito: ".blue + ` R$ ${dinheiro.toFixed(2)}`)
    }

    sacar(dinheiro) {
        if (dinheiro <= this.saldoCorrente) {
            console.log("Saque de: ".blue + `   R$ ${dinheiro}`)
            this.saldoCorrente -= dinheiro
        } else {
            console.log("Valor Indisponivel".red)
        }
    }

    pix(dinheiro) {
        if (dinheiro <= this.saldoCorrente) {
            this.saldoCorrente -= dinheiro
            console.log("1 - Leandro")
            console.log("2 - Robson")
            console.log("3 - Sirlene")
            pix = Number(read.question(`Pix de R$ ${dinheiro.toFixed(2)} para: `.green))
            switch (pix) {
                case 1:
                    console.log("")
                    console.log("Saldo do Leandro".yellow)
                    leandro.saldoCorrente += dinheiro
                    leandro.exibirSaldo()
                    break

                case 2:
                    console.log("")
                    console.log("Saldo do Robson ".yellow)
                    vaamonde.saldoCorrente += dinheiro
                    vaamonde.exibirSaldo()
                    break

                case 3:
                    console.log("")
                    console.log("Saldo da Sirlene".yellow)
                    sirlene.saldoCorrente += dinheiro
                    sirlene.exibirSaldo()
                    break
            }

        } else {
            console.log("Valor inacessivel")
        }
    }

}

let poupanca, resp
class ContaPoupanca extends Conta {
    constructor(numero, nome, saldoCorrente, saldoPoupanca) {
        super(numero, nome, saldoCorrente)
        this.saldoPoupanca = saldoPoupanca
    }

    exibirContaPoupanca() {
        console.log("Conta Poupança: ".blue + ` R$ ${this.saldoPoupanca.toFixed(2)}`)
        console.log("")
    }

    transferenciaCorrentePoupanca(dinheiroPoupanca) {
        if (dinheiroPoupanca <= this.saldoPoupanca) {
            poupanca = this.saldoPoupanca += dinheiroPoupanca
            resp = this.saldoCorrente -= dinheiroPoupanca
            console.log("Sua Transferencia -> ".yellow + `R$ ${dinheiroPoupanca.toFixed(2)} da Conta Corrente`)
            console.log("Seus Dados Atualizados:".yellow)
            console.log("Conta Corrente: ".blue + `R$ ${this.saldoCorrente.toFixed(2)}`)
        } else {
            console.log("Valor Indisponível !!!".red)
        }
    }


}


let leandro = new Conta(1, "Leandro Ramos", 10000)
let vaamonde = new Conta(2, "Robson Vaamonde", 20000)
let sirlene = new Conta(3, "Sirlene Sanches", 30000)

let leandrop = new ContaPoupanca(1, "Leandro Ramos", 10000, 7000)
let vaamondep = new ContaPoupanca(2, "Robson Vaamonde", 20000, 2000)
let sirlenep = new ContaPoupanca(3, "Sirlene Sanches", 30000, 3000)

let servicos1, pix

console.log("1 - Leandro Ramos")
console.log("2 - Robson Vaamonde")
console.log("3 - Sirlene Sanches")
this.nome = Number(read.question("Acesse uma das contas acima: "))

switch (this.nome) {
    case 1:
        console.log("Leandro Ramos")
        break

    case 2:
        console.log("Robson Vaamonde")
        break
    case 3:
        console.log("Sirlene Sanches")
        break
    default:
        console.log("Erro no Processo :(  Tente Novamente".red)
}

if (this.nome === 1) {
    console.clear()
    console.log("Informações da sua conta: ".yellow)
    leandro.informacoesPessoais()
    leandrop.exibirContaPoupanca()
    console.log("Servicos Bancarios Disponiveis: ".yellow)
    leandro.servicos()
    servicos1 = Number(read.question("Digite aqui: "))

    switch (servicos1) {
        case 1:
            console.clear()
            leandro.exibirSaldo()
            leandro.depositar(200)
            break

        case 2:
            console.clear()
            leandro.sacar(1000)
            leandro.exibirSaldo()
            break

        case 3:
            console.clear()
            leandro.pix(500)
            console.log("")
            console.log("*Dados atualizados da minha conta (Leandro) ".yellow)
            leandro.exibirSaldo()
            break

        case 4:
            console.clear()
            leandrop.exibirContaPoupanca()
            leandrop.transferenciaCorrentePoupanca(200)
            leandrop.exibirContaPoupanca()
            break

        default:
            console.log("Erro no Processo :(  Tente Novamente".red)
            break
    }


} else if (this.nome === 2) {
    console.clear()
    console.log("Informações da sua conta: ".yellow)
    vaamonde.informacoesPessoais()
    vaamondep.exibirContaPoupanca()
    console.log("Servicos Bancarios Disponiveis: ".yellow)
    vaamonde.servicos()
    servicos1 = Number(read.question("Digite aqui: "))

    switch (servicos1) {
        case 1:
            console.clear()
            vaamonde.exibirSaldo()
            vaamonde.depositar(2000)
            break

        case 2:
            console.clear()
            vaamonde.sacar(3000)
            vaamonde.exibirSaldo()
            break

        case 3:
            console.clear()
            vaamonde.pix(1000)
            console.log("")
            console.log("*Dados atualizados da minha conta (Vaamonde)".yellow)
            vaamonde.exibirSaldo()
            break

        case 4:
            console.clear()
            vaamondep.exibirContaPoupanca()
            vaamondep.transferenciaCorrentePoupanca(1000)//Transferência da Conta Corrente pra Conta Poupança
            vaamondep.exibirContaPoupanca()
            break

        default:
            console.log("Erro no Processo :(  Tente Novamente".red)
            break
    }


} else if (this.nome === 3) {
    console.clear()
    console.log("Informações da sua conta".yellow)
    sirlene.informacoesPessoais()
    sirlenep.exibirContaPoupanca()
    console.log("Servicos Bancarios Disponiveis: ".yellow)
    sirlene.servicos()
    servicos1 = Number(read.question("Digite aqui: "))

    switch (servicos1) {
        case 1:
            console.clear()
            sirlene.exibirSaldo()
            sirlene.depositar(4000)
            break

        case 2:
            console.clear()
            sirlene.sacar(1000)
            sirlene.exibirSaldo()
            break

        case 3:
            console.clear()
            sirlene.pix(3000)
            console.log("")
            console.log("*Dados atualizados da minha conta (Sirlene)".yellow)
            sirlene.exibirSaldo()
            break

        case 4:
            console.clear()
            sirlenep.exibirContaPoupanca()
            sirlenep.transferenciaCorrentePoupanca(200)
            sirlenep.exibirContaPoupanca()
            break

        default:
            console.log("Erro no Processo :(  Tente Novamente".red)
            break
    }
}