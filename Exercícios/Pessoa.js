/**
 * P.O.O - Estudo do Encapsulamento 
 */

//Classe Modelo
class Pessoa {
    //Atributos
    constructor(nome, idade) {
        this.nome = nome    //Esta é uma Variável Pública
        let _idade = idade  //Variável Encapsulada (com Segurança). Resultará em "undefined". O underline "_" torna a Variável encapsulada
        //Pra acessar a Variável "idade", usamos os Métodos "get" e "set"
        this.getIdade = () => {
            return _idade
        }

        this.setIdade = (novaIdade) => {
            _idade = novaIdade
        }

    }
    //Métodos
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.getIdade()} anos`)
    }
}

console.clear()
//Criando (Instanciar) Objetos
const pessoa1 = new Pessoa("Andres", 19)
pessoa1.apresentar()
pessoa1.setIdade(20)
pessoa1.apresentar()
