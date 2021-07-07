//Exercício 20

function lacoFor() {
    for (i = 1; i <= 50; i++) {
        console.log(i)
    }
}

function usoBreak() {
    for (i = 1; i <= 50; i++) {
        console.log(i)
        if (i === 25) {
            break
        }
    }
}

function usoContinue() {
    for (i = 1; i <= 50; i++) {
        if (i === 10) {
            continue
        } else {
            console.log(i)
        }
    }
}

console.log('Exercício 20')
console.log('Resultado do laço FOR:')
lacoFor()
console.log('Resultado do BREAK (contar até 50 e interromper em 25):')
usoBreak()
console.log('Resultado do CONTINUE (contar até 50 e pular o 10):')
usoContinue()