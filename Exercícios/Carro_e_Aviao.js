console.clear()
const colors = require('colors')

class Carro {
    constructor(nome, cor, ano, marca) {
        this.ano = ano
        this.cor = cor
        this.marca = marca
        this.nome = nome
    }
    //Métodos
    criarCarro() {
        console.log(`${this.nome} ${this.cor} do ano ${this.ano}, da ${this.marca}`.red)
    }

    ligar() {
        console.log("Ligando o carro...".bgGreen)
        console.log("")
    }

    desligar() {
        console.log("Desligando o carro...".bgRed)
    }
    acelerar() {
        console.log("Acelerando na Avenida em 3, 2, 1...VRUUMM".green)
    }
    desacelerando() {
        console.log("Desacelerando na faixa de pedestre. Respeite a faixa !".bgRed)
    }
}

class Aviao extends Carro {
    constructor(nome, cor, ano, marca, envergadura) {
        super(nome, cor, ano, marca)
        this.envergadura = envergadura
    }

    criarAviao() {
        console.log("")
        console.log(`O Aviao é da cor ${this.cor} do ano ${this.ano} com Envergadura do tamanho ${this.envergadura}m`.red)
    }

    aterrizar() {
        console.log(`Aterrizando...`)
    }

    acelerar() {
        console.log("Aviao subindo... Pronto para Viagem ! Bom Proveito !!!!".blue)
    }

}

const meriva = new Carro("Meriva", "Cinza", 2015, "Chevrolet")
meriva.ligar()
meriva.criarCarro()
meriva.acelerar()
meriva.desacelerando()

const corsa = new Carro("Corsa", "Vermelho", 2012, "BMW")
corsa.criarCarro()

const Aviao1 = new Aviao("Aviao a Jato", "Branca", 2008, "BoA(Boliviana de Aviacion)", 97.5)
Aviao1.criarAviao()
Aviao1.acelerar()