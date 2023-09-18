const read = require('readline-sync')
const colors = require('colors')

console.clear()
console.log("                                                         .!#!::!#!.                                              .!#!.    ".blue)            
console.log("                                                        :##!  .#.  !####!                                ##!!!##:#   !#.  ".blue)            
console.log("        !################:                          !##::#!   #.  .#   !#:                             .##.  .####   !#:  ".blue)            
console.log("     :####.                .##.                     ##   :!   #.  .#   !#:                               ##:   ###   !#:  ".blue)           
console.log("  ##!                       .##.                    ##   :!   #.  .#   !#:                              !###!   !#   !#:  ".blue)            
console.log(" :##                        .####.                  ##   :!   #.  .!   !#:                        .#####!   #.       !#:  ".blue)            
console.log(" :##    :.     :.     :     .#  ##:                 ##                 !##!.:##!                  ##   :!   #.       !#:  ".blue)           
console.log(" :##    !:     !.     #.    .#  !#!                 ##         .!#!!!!!.     .##.                 ## :!            .###:  ".blue)            
console.log(" .##:   !:     !.     #.    .#  !#!                 ##       :!           .###.                   ##  :#####         !#:  ".blue)               
console.log("   .!####!     !.     !.    :# .##:                 !#!      .         .###.                      !#!      #        .##   ".blue)            
console.log("         !#########!!!!!!!!. :##!                    .##:           .##!.                          .##:           .##!    ".blue)            
console.log("                 .###########:                          .###########!                                 .###########:       ".blue)
console.log("                                                _       _                             ".yellow)
console.log("                                               | | ___ | |__ ___ ._ _  ___  ___       ".yellow)
console.log("                                              _| |/ . \\| / // ._>| ' || . \\/ . \\   ".yellow)
console.log("                                              \\__/\\___/|_\\_\\\___. |_|_||  _/\\___/ ".yellow)
console.log("                                                                      |_|              ".yellow)  
console.log("Pedra   -> 1")
console.log("Papel   -> 2")
console.log("Tesoura -> 3")
console.log(" ")
let jogador = Number(read.question("Digite um valor de 1 a 3: "))
console.log("")

let pc = Math.floor(Math.random() * 3 + 1)

switch (jogador) {
    case 1:
        console.log("VOCÊ Escolheu Pedra")
        break

    case 2:
        console.log("VOCÊ Escolheu Papel")
        break

    case 3:
        console.log("VOCÊ Escolheu Tesoura")
        break

    default:
        console.log("Valor Invalido")
        break
}

switch (pc) {
    case 1:
        console.log("O Computador Escolheu Pedra !")
        break

    case 2:
        console.log("O Computador Escolheu Papel !")
        break

    case 3:
        console.log("O Computador Escolheu Tesoura !")
        break

    default:
        console.log("Valor invalido")
        break
}

if(jogador === pc){
    console.log("Empate".yellow)
} else if(jogador === 1 && pc === 3){
    console.log("VOCÊ venceu! Parabéns !!!".green)
} else if(jogador === 2 && pc === 1){
    console.log("VOCÊ venceu! Parabéns !!!".green)
} else if(jogador === 3 && pc === 2){
    console.log("VOCÊ venceu! Parabéns !!!".green)
} else if(jogador === 1 && pc === 2){
    console.log("O Computador Venceu...".red)
} else if(jogador === 2 && pc === 3){
    console.log("O Computador Venceu...".red)
} else if(jogador === 3 && pc === 1){
    console.log("O Computador Venceu...".red)
} 