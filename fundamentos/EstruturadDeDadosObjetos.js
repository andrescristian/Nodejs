/**
 * Estrutuda de Dados - Objetos
 */
const funcionario1 =  {
}
console.log(typeof funcionario1)

//Adicionar Dados a Estrutura
funcionario1.nome = "Jose"
funcionario1.cargo = "Professor"
funcionario1.email = "josedeassisfilho@gmail.com"
funcionario1.salario = 8000
funcionario1.insta = "@prof.joseassis"

//Ler - Buscar os Dados da Estrutura
console.log(funcionario1)
console.log(funcionario1.cargo)

//Modificando os Dados de uma Estrutura
funcionario1.nome = "Jose de Assis"
console.log(funcionario1)

//Excluir Dados de uma Estrutura
delete funcionario1.insta
console.log(funcionario1)

//Criando uma Nova Estrutura de Dados
const funcionario2 = {
    nome: "Bruce Wayne",
    cargo: "SEO",
    email: "batman@email.com",
    salario: 400000
}

console.log(funcionario2)

const endereco1 = {
    logradouro: "Bat caverna",
    cidade: "Gothan City",
    estado: "Nova Jersey"
}

console.log(endereco1)

const funcionario3 = {
    nome: "Alfred Pennywort",
    cargo: "Mordomo",
    email: "alfred@email.com",
    salario: 20000,
    ...endereco1 //... é o Spread Operator (Faz a união de Duas Estruturas). Equivalente ao INNER JOIN -> MySQL
}

console.log(funcionario3)

const funcionario4 = {
    nome: "Dick Grayson",
    cargo: "Acrobata",
    email: "robin@email.com",
    salario: 2000,
    ...endereco1
}

console.log(funcionario4)

const funcionario5 = {
    nome: "Tony Stark",
    cargo: "Engenheiro",
    email: "ironman@gmail.com",
    salario: 375000,
    //Criando uma estrutura de Dados dentro desta Estrutura de Dados
    armadura: {
        versao: "Mark II",
        ano: 2010,
        reator: "Arc 01"
    },
    //Função
    suitUP: () => {
        console.log("🤖")
    }
}

console.log(funcionario5)

//Ver um Dado Específico
console.log(funcionario5.armadura.versao)

//Executando/chamando uma Função
funcionario5.suitUP()

