/**
 * Exemplo e Uso da Estrutura "switch case"
 */
const read = require('Readline-sync')
const colors = require('colors')

let opcao

console.clear()
console.log("Sistema Operacional")
console.log("")
console.log("Opção 1 - Windows")
console.log("Opção 2 - GNU/Linux")
console.log("Opção 3 - MAC")
console.log("")

opcao = Number(read.question("Escolha um Sistema Operacional: "))
switch (opcao) {
    case 1:
        console.clear()
        console.log("Carregando o Windows".blue)
        console.log("                    ....iilllllllllllll")
        console.log("        ....iillll  lllllllllllllllllll")
        console.log("    iillllllllllll  lllllllllllllllllll ")
        console.log("    llllllllllllll  lllllllllllllllllll ")
        console.log("    llllllllllllll  lllllllllllllllllll ")
        console.log("    llllllllllllll  lllllllllllllllllll ")
        console.log("    llllllllllllll  lllllllllllllllllll ")
        console.log("    llllllllllllll  lllllllllllllllllll ")
        console.log("                                        ")
        console.log("    llllllllllllll  lllllllllllllllllll ")
        console.log("    llllllllllllll  lllllllllllllllllll ")
        console.log("    llllllllllllll  lllllllllllllllllll ")
        console.log("    llllllllllllll  lllllllllllllllllll ")
        console.log("    llllllllllllll  lllllllllllllllllll ")
        console.log("    `^^^^^^lllllll  lllllllllllllllllll ")
        console.log("          ````^^^^  ^^lllllllllllllllll ")
        console.log("                         ````^^^^^^llll ")
        break

    case 2:
        console.clear()
        console.log("Carregando o GNU/Linux".yellow)
console.log("              .88888888:. ")
console.log("             88888888.88888. ")
console.log("           .8888888888888888. ")
console.log("           888888888888888888 ")
console.log("           88' _`88'_  `88888 ")
console.log("           88 88 88 88  88888 ")
console.log("           88_88_::_88_:88888 ")
console.log("           88:::,::,:::::8888 ")
console.log("           88`:::::::::'`8888 ")
console.log("          .88  `::::'    8:88. ")
console.log("        .8888            `8:888. ")
console.log("       .8888'             `888888. ")
console.log("      .8888:..  .::.  ...:'8888888:. ")
console.log("     .8888.'     :'     `'::`88:88888 ")
console.log("    .8888        '         `.888:8888. ")
console.log("  .888:8         .           888:88888 ")
console.log(".888:88        .:           888:88888: ")
console.log(" 8888888.       ::           88:888888 ")
console.log("`.::.888.      ::            .88888888 ")
console.log(".::::::.888.    ::         :::`8888'.:. ")
console.log(" ::::::::::.88 '         .:::::::::::: ")
console.log(" ::::::::::::.    '      .:8::::::::::::.")
console.log(".::::::::::::::.        .:888::::::::::::: ")
console.log(":::::::::::::::88:.__..:88888:::::::::::' ")
console.log(" `'.:::::::::::88888888888.88:::::::::' ")
console.log("      `':::_:' -- '' -'-' `':_::::'` ")

        break

    case 3:
        console.clear()
        console.log("Carregando o MAC".black)
        console.log("")
        console.log("            .:'    ")
        console.log("        __ :'__    ")
        console.log("     .'`  `-'  ``. ")
        console.log("    :          .-' ")
        console.log("    :         :    ")
        console.log("     :         `-; ")
        console.log("      `.__.-.__.'  ")
        console.log("                   ")
        break

    default:
        console.log("Opção Inválida")
        break
}
