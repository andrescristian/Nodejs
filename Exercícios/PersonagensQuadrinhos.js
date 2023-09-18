const read = require('readline-sync')
const colors = require('colors')

let heroi, vilao, sup, bat

console.clear()
console.log("    ____             __             __        __  _ __ ".cyan)
console.log("   / __ \\__  _____  / /___     ____/ /__     / /_(_) /_____ ______ ".cyan)
console.log("  / / / / / / / _ \\/ / __ \\   / __  / _ \\   / __/ / __/ __ `/ ___/ ".cyan)
console.log(" / /_/ / /_/ /  __/ / /_/ /  / /_/ /  __/  / /_/ / /_/ /_/ (__  )  ".cyan)
console.log("/_____/\\__,_/\\___/_/\\____/   \\__,_/\\___/   \\__/_/\\__/\\__,_/____/   ".cyan)
read.question("")

console.log("1 - Superman")
console.log("2 - Batman")
console.log("3 - Homem-Aranha")
heroi = Number(read.question("Escolha um personagem para a batalha: "))



switch (heroi) {
    case 1:
        console.clear()
        console.log("       :!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!       ")
        console.log("   :!!!:::!!!!!!!!:::::::!!!!!::!!!!!:!!!:     ")
        console.log(" :!!!:::!!!!!!::::::::::::::::!!!!!!!!::::!!!: ")
        console.log(" :!!!::!!!!!!!!!::::::::::::::::::::::::::!!!: ")
        console.log("    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!::::!!!!    ")
        console.log("      :!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!       ")
        console.log("         !!!::::::::::::::::::::!!!!!.         ")
        console.log("           :!!!!!!!!!!!::::::!!!!!!            ")
        console.log("              !!!!::!!!!!!!:!!!!               ")
        console.log("                :!!!::::::!!!.                 ")
        console.log("                   !!!!!!!:                    ")
        console.log("                     :!!                       ")
        console.log("Superman vai enfrentar o: ".bgRed)
        break

    case 2:
        console.clear()
        console.log(".!@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#               ||     ||             !@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@!.  ".bgBlack)
        console.log("          :@@@@@@@@@@@@@@@@@@@@@@@@@@.           @#@@#@.           @@@@@@@@@@@@@@@@@@@@@@@@@@:           ".bgBlack)
        console.log("             #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#              ".bgBlack)
        console.log("              @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                 ".bgBlack)
        console.log("             #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                 ".bgBlack)
        console.log("                              .:!@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#:.                               ".bgBlack)
        console.log("                                          .@@@@@@@@@@@@@@@@@@.                                           ".bgBlack)
        console.log("                                              !@@@@@@@@#                                                 ".bgBlack)
        console.log("                                                  @@@@.                                                  ".bgBlack)
        console.log("                                                    .                                                   ".bgBlack)
        console.log("Batman vai enfrentar o: ".bgBlack)
        break

    case 3:
        console.clear()
        console.log("        .  :                    .           ")
        console.log("        !.  #                :.  !          ")
        console.log("       @  .@                  @:  @         ")
        console.log("      @:  @      /     \\      @: .@        ")
        console.log("     @@  @@      |!   !|       @@  @@       ")
        console.log("     @#      !@@.@@@@@@@@.@@#      #@!      ")
        console.log("     #@@:    @@@@@@@@@@@@@@@@    .@@@       ")
        console.log("         .@@  :@@.@@@@@@ @@!  @@.           ")
        console.log("      @@!    @@!  @@@@@@  :@@    .@@        ")
        console.log("  .@@        @@.  #@@@@@  .@@       .@@!    ")
        console.log("   @@        @@.   @@@@    @@        @@.    ")
        console.log("   @@        @@     !!     @@        @@     ")
        console.log("    @:       :@.          .@!       .@      ")
        console.log("     @        @!          :@        @       ")
        console.log("      @       :@          @!       @        ")
        console.log("       !       #:        .#       !         ")
        console.log("                :        !                  ")
        console.log("                  !    :                    ")
        console.log("Homem-Aranha vai enfrentar o: ".bgBlue)
        break

    default:
        console.log("Opcao Invalida".red)
        break

}

console.log("1 - Venom")
console.log("2 - Flash")
console.log("3 - Robin")
console.log("")
vilao = Number(read.question("Escolha um Adversario: "))

switch (vilao) {
    case 1:
        console.clear()
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
        console.log("@@@@@@@@@@@@@@@@@@@@!!@@.@@@@@@@@@@@@@@@@@!@!:@@@@@@@@@@@@@@@@@@")
        console.log("@@@@@@@@@@@@@@@@@@..@@@@@@@@@@@@@@@@@@@@@#:@@@# :@@@@@@@@@@@@@@@")
        console.log("@@@@@@@@@@@@@@@@:!.#@@@@@@@@@@@@@@@@@@@@@@@@@@@.  #@@@@@@@@@@@@@")
        console.log("@@@@@@@@@@@@@@@!:  @@@@@@@@@@@@@@@@@@@@@@@@@@@@   .#@@@@@@@@@@@@")
        console.log("@@@@@@@@@@@@@@##!.:.#@@@@@@@@@@@@@@@@@@@@@@@@!#    @@@@@@@@@@@@@")
        console.log("@@@@@@@@@@@@@@@#   : .!@@@@@@@@@@@@@@@@@@@@@:      .!@@@@@@@@@@@")
        console.log("@@@@@@@@@@@@@@@:#:.    : @@@@@@@@@@@@@@@@@    .... .@@@@@@@@@@@@")
        console.log("@@@@@@@@@@@@@@@@::        ##@@@@@@@@@@@@...    #  #@@@@@@@@@@@@@")
        console.log("@@@@@@@@@@@@@@@@@##@::.  . .!!@@@@@@@::! .  ..:.@@@@@@@@@@@@@@@@")
        console.log("@@@@@@@@@@@@@@@@@@@@@@!.:   ..@@@@@@@  #: ..:@@@@@@@@@@@@@@@@@@@")
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@##@@@@@@@@@@@@@@@@@")
        console.log("@@@@@@@@@@@@@@@@@@@#!  !@#@@@@@@@@@@@@@@@#!....@@@@@@@@@@@@@@@@@")
        console.log("@@@@@@@@@@@@@@@@@@@@@:! !:. :.:..@::@ #!::  :@@@@@@@@@@@@@@@@@@@")
        console.log("@@@@@@@@@@@@@@@@@@@@@@@#@!!##:!:.@:.@#@...@#@@@@@@@@@@@@@@@@@@@@")
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#@!#@!!@!@::@!@@@@@@@@@@@@@@@@@@@@@")
        console.log("@@@@@@@@@@@@@@@@@@######!######@#@!@!@@@@@ #@@@@@@@@@@@@@@@@@@@@")
        console.log("@@@@@@@@@@@@@@@@@!!#####!!@@@@@@@@##@@@@@! #@@@@@@@@@@@@@@@@@@@@")
        console.log("@@@@@@@@@@@@@@@@@######@ !@##@@@@@@@@@@@@ .@@@@@@@@@@@@@@@@@@@@@")
        console.log("@@@@@@@@@@@@@@@@@#!###@@#:.# #@@.@@@@:@!.:@@@@@@@@@@@@@@@@@@@@@@")
        console.log("@@@@@@@##@###@@@@@##!!@@@@@! #:@ @:#.#.!.@@@@@@@@@@@@@@@@@@@@@@@")
        console.log("@@@@@@@@#@@@!#@@@@@!!#@@@@@@#!!#!@:...:@@@@@@@@@@@@@@@@@@@@@@@@@")
        console.log("@@@@@@@@#@@@@##@@@@@##@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
        console.log("@@@@@@@@@#@@@@!#@@@@!#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
        console.log("@@@@@@@@@@@@@@@####!!@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
        console.log("                           VENOM                                ".bgWhite)
        break

    case 2:
        console.clear()
        console.log("                                                  .  ")
        console.log("                                               :!.   ")
        console.log("                 ......          ..        .:!:      ")
        console.log("              ...:!################!:....:!#.        ")
        console.log("          ..:!!##@@@@@@########@@@#!..:!#!..         ")
        console.log("       .::!!#@@@###############!...:!##@@#!!::.      ")
        console.log("     .:::!@@@@##############:...:########@@@!:::.    ")
        console.log("    :!::@@@#############!::::!#!:......::#@@@@::!:   ")
        console.log("   :!:!@@@##########!::::!!#####!!!!!!######@@@!:!:  ")
        console.log("   !::#@@########!!#######!!::!!!!!##########@@#::!  ")
        console.log(" .:..#@@############!!:::::!!!###############@#..:.  ")
        console.log("  :.:#@@##########!:...:!##!!!!!!!!!!########@#:.:   ")
        console.log("   ..:!@@@#######:....!!!:::..:::!!##########@@!...  ")
        console.log("    ..::@@@@##:.::!#####!!!!!!!#############@@::..   ")
        console.log("      ::#@@@###@###!::!!!!#############@@@@#:.       ")
        console.log("       .::!#@@@#!::!!###############@@#@#!:..        ")
        console.log("         ..:::::!###@##@@@@###@@@@@@@#!::..          ")
        console.log("           ..!##!::!!##########!!:::::.              ")
        console.log("           .!#!.    ....::::::::....                 ")
        console.log("       .!!.                                          ")
        console.log("     .!:                                             ")
        console.log("                     FLASH                           ".bgYellow)
        break

    case 3:
        console.clear()
        console.log("                                       ###.        ")
        console.log("                     .::::::::::::::::::.   @@@@@  ")
        console.log("           .::::::.       .:::::::::::::::.  @@@@@ ")
        console.log("               @@@@@!         :::::::::::  #@@@@@  ")
        console.log("            #@@.   :::::::    :::::::::.  .@@@@@@  ")
        console.log("         @@@@@.  :::::::: ::::::::::   .@@@@@@@    ")
        console.log("      #@@@@@@   :::::::::::::::::. .@@@@@@@@@      ")
        console.log("    @@@@@@@@  .:::::::..:::::::::::  @@@@@         ")
        console.log("   @@@@@@@@  ::::::::.    .:::::::::  .            ")
        console.log("  @@@@@@@@  ::::::::  .@@@   .:::::::              ")
        console.log("  @@@@@@@  ::::::::  #@@@@@@@   .:::::             ")
        console.log("   @@@:  ::::::::  @@:            .:::.            ")
        console.log("         :::                          :::          ")
        console.log("        ::                               :         ")
        console.log("                    ROBIN                          ".red)
        console.log("")
        break

    default:
        console.log("Opcao Invalida".red)
        break
}

if (heroi === 1 && vilao === 1) {
    console.log("O Superman Venceu".green)
} else if (heroi === 1 && vilao === 3) {
    console.log("O Superman Venceu de forma humilhante!")
} else if (heroi === 3 && vilao === 3) {
    console.log("O Amigo da Vizinhanca vence do Robin")
} else if (heroi === 1 && vilao === 2) {
    console.log("A luta é equilibrada, mas no fim o Superman Vence !".bgWhite)
}
else if (heroi === 3 && vilao === 1) {
    console.log("O Venom Venceu !".red)
} else if (heroi === 2 && vilao === 3) {
    console.log("Eles não podem se enfrentar, são uma Dupla".yellow)
    vilao = Number(read.question("Tente Novamente: [ENTER] "))
    console.clear()
    console.log(" ___                                      __  _ ___        _                     ")
    console.log("/ __) _ _  ___  ___  _ _ ._ _ _  ___ ._ _ \\ \\/ | . > ___ _| |_ ._ _ _  ___ ._ _ ")
    console.log("\\__ \\| | || . \\/ ._>| '_>| ' ' |<_> || ' | \\ \\ | . \\<_> | | |  | ' ' |<_> || ' |")
    console.log("(___/`___||  _/\\___.|_|  |_|_|_|<___||_|_|_/\\_\\|___/<___| |_|  |_|_|_|<___||_|_|")
    console.log("          |_|                                                                   ")
    console.log("Quem vence nessa Rivalidade ?")
    console.log(" ")
    console.log("1 - Superman")
    console.log("2 - Batman")
    sup = Number(read.question("Digite aqui: "))
    switch (sup) {
        case 1:
            console.log("Superman PERDE".red)
            break

        case 2:
            console.log("Batman VENCE com preparo, usando a Kriptonita".green)
            break

        default:
            console.log("Valor invalido")
            break
    }
} else if (heroi === 2 && vilao === 2 || 1) {
    console.log("Você perdeu!".red)
}

