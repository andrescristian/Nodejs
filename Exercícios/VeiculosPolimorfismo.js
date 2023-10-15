class Carro {
    constructor(cor, marca, ano) {
        this.marca = marca
        this.ano = ano
        this.cor = cor
    }

    criarCarro() {
        console.log(`O carro ${this.cor} da ${this.marca} é do ano ${this.ano}`)
    }

    acelerando() {
        console.log(`Acelerando em 3, 2, 1 ...`)
    }
}

class Aviao extends Carro{
    constructor(cor, marca, ano, envergadura){
        super(cor, marca, ano)
        this.envergadura = envergadura
    }

    acelerando(){
        console.log(`O avião está voando ja ja...`)
    }
}

const carro1 = new Carro("Verde", "Chevrolet", 2017)
carro1.acelerando()

const aviao1 = new Aviao("Branco", "Air Aviance", 2015)
aviao1.acelerando()
