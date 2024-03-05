/**
 * Estrutura de Dados - Objetos (Continuação de "objetos.js")
 */

//Vetores são uma estrutura de Dados Indexada (Índices de números)
let alunosEM1 = ["Vitor", "Tania", "Pedro", "Maria", "Viviane", "Sirlene"]
console.clear()
console.log(typeof alunosEM1)

//Mostra o tamanho do Array 
console.log(alunosEM1.length)

//Exibindo Dados de um Array
console.log(alunosEM1)
console.table(alunosEM1)

//Adicionando Dados no Array
alunosEM1.push("Jorge") //Adiciona no fim da lista
console.table(alunosEM1)

alunosEM1.unshift("Luiza")// Adicionar no início da lista
console.table(alunosEM1)

alunosEM1.splice(4, 0, "Matheus", "Julia") //(Índice, 0 -> adiciona para o nº 4)
console.table(alunosEM1)

alunosEM1[12] = "Leandro" //Adiciona o Índice 12 com uma String
console.log(alunosEM1)
console.table(alunosEM1)

//Modificando os Dados de um Array a partir do Índice
alunosEM1[1] = "Victor"
console.table(alunosEM1)

//Excluindo os Dados de um Array
alunosEM1.pop() //Excluir o último item da lista
console.table(alunosEM1)

alunosEM1.shift() //Excluir o primeiro item da lista
console.table(alunosEM1)

alunosEM1.splice(5, 2) //(Índice, nº de registros excluidos)
console.table(alunosEM1)

delete alunosEM1[3]     //Excluir um item e seu Índice
console.table(alunosEM1)

// Percorrendo um Array
let notas = [3, 8, 5, 6, 9, 2]
console.log(notas)

//Laço for - Percorrendo
for (let i=0; i < notas.length; i++){
    console.log(notas[i])
}

//forEach - Percorrendo
notas.forEach((n) => {
    console.log(n)
})

//map() - Percorrer o Array e gerar outro array modificado
//Exemplo 1 - Somar 1 ponto as notas
let notasAtualizadas = notas.map((na) =>{
    return na + 1
})
console.log(notas)
console.log(notasAtualizadas)

//Exemplo 2 - Converter o sistema de pontos para letras
//A (nota > 8)  PA (nota entre 5 e 8)  NA (nota < 5)
let notasConvertidas = notas.map((nc) => {
    if (nc < 5){
        return "NA"
    } else if (nc > 8) {
        return "A" 
    } else {
        return "PA"
    } 
})
console.log(notas)
console.log(notasConvertidas)

//Um Array também pode ser criado com um objeto
let alunosEM2 = new Array("Tony", "Peter", "Thor", "Natasha")
console.log(alunosEM2)
console.table(alunosEM2)

let alunosEM3 = [
    {
        nome: "Bruce",
        idade: 43,
        bolsista: false
    },
    {
        nome: "Clark",
        idade: 45,
        bolsista: false
    },
    {
        nome: "Diana",
        idade: 36,
        bolsista: false
    },
    {
        nome: "Barry",
        idade: 23,
        bolsista: true
    }
]

console.log(alunosEM3)
console.table(alunosEM3)

//Uso de Filtros
//Exemplo 1: Alunos bolsistas
console.table(alunosEM3.filter((b) =>{
    return b.bolsista === true
}))

//Exemplo 2: Alunos com mais de 40 anos de idade
console.table(alunosEM3.filter((i) =>{
    return i.idade > 40
}))

//Exemplo 3: Calcular a média de idade dos alunos
let somaIdades = alunosEM3.reduce((si, aluno) =>{
    return si + aluno.idade
}, 0)
console.log(somaIdades)
let mediaIdades = somaIdades/alunosEM3.length
console.log(mediaIdades)