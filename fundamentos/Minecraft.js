/**
 *  P.O.O   - Fundamentos da Programação Orientada a Objetos
 * Exemplo  - Jogo do Minecraft
 */

//Classe Modelo (Abstração, planta, planejamento)
class bloco {
    //Atributos
    constructor(resistencia, textura) {
        this.resistencia = resistencia
        this.textura = textura
    }
    //Ações/Métodos
    criarBloco() {
        console.log("-------------")
        console.log("┍━┑")
        console.log("┖─┚")
        console.log(`Bloco de ${this.textura}`)
        console.log(`Resistencia: ${this.resistencia}`)
    }

    construir() {
        console.log(`Bloco de ${this.textura} colocado.`)
    }

    minerar() {
        console.log("☐ ☐ ☐ Recursos obtidos!")
    }
}

//Classe modelo com Herança(extends)
//"bloco" e "enxada" são Classes Modelos
class Enxada extends bloco {
    //"resistencia" e "textura" são Atributos Reutilizados da 1º Classe "bloco". O Atributo "conquista" foi adicionado
    constructor(resistencia, textura, conquista) {
        super(resistencia, textura)//"super" é a "Classe Pai(o bloco la de cima)"
        this.conquista = conquista
    }
    
    //Métodos
    criarEnxada() {
        console.log("-------------")
        console.log("-_")
        console.log(" /")
        console.log(`Enxada de ${this.textura}`)
        console.log(`Resistencia: ${this.resistencia}`)
    }

    //Método novo
    arar() {
        console.log("._._._. Terra arada")
        if (this.conquista === true) {
            console.log("Conquista obtida !")
        }

    }
    //Polimorfismo
    minerar(){
        console.log("✞ Dano Atribuído")
    }

}

//Criação de Objetos (Mundo Minecraft)
console.clear()
console.log(" _____ _____ _____ _____ _____ _____ _____ _____ _____   ")
console.log("|     |     |   | |   __|     | __  |  _  |   __|_   _| ")
console.log("| | | |-   -| | | |   __|   --|    -|     |   __| | |   ")
console.log("|_|_|_|_____|_|___|_____|_____|__|__|__|__|__|    |_|   ")
console.log("")

//Criando um bloco de terra
//"new"     --> Novo Objeto
//"bloco"   --> É a "Classe Modelo" ("resistencia" e "textura")
const bloco1 = new bloco(1, "terra")
bloco1.criarBloco()

//Criando um Bloco de madeira
const bloco2 = new bloco(2, "madeira")
bloco2.criarBloco()
bloco2.construir()

//Criando um bloco de pedra
const bloco3 = new bloco(5, "pedra")
bloco3.criarBloco()
bloco3.minerar()

//Teste - criar bloco
const la = new bloco(0.5, "material -> lã")
la.criarBloco()
la.minerar()

//Criando uma enxada de madeira
const enxada1 = new Enxada(2, "madeira", false)
enxada1.criarEnxada()
enxada1.arar()

//Criando enxada de ferro
const enxada2 = new Enxada(5, "ferro", true)
enxada2.criarEnxada()
enxada2.arar()

//Criando uma enxada de diamante
const enxada3 = new Enxada(10, "diamante", false)
enxada3.criarEnxada()
enxada3.minerar()
