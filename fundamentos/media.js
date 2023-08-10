/** 
 * App para calcular a média de 2 notas 
 */

//Variáveis
let nome, disciplina
let nota1, nota2, media

console.clear
console.log(" ___      _     _   _ ")      
console.log("| _ ) ___| |___| |_(_)_ __ ")  
console.log("| _ \\/ _ \\ / -_)  _| | '  \\ ") 
console.log("|___/\\___/_\\___|\\__|_|_|_|_|")
console.log("")

//Entrada
nome = "Andres"
disciplina = "Matemática"
nota1 = 9
nota2 = 8

//Processamento
media = (nota1 + nota2) / 2

//Saída
console.log(`Nome: ${nome}`)
console.log(`Disciplina: ${disciplina}`)
console.log(`Nota 1:${nota1}`)
console.log(`Nota 2:${nota2}`)
console.log(`Média Final: ${media}`)

