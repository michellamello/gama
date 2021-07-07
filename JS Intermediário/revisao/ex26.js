//Exercício 26

function repeticao() {
    for (i = 1; i <= 100; i++) {
        console.log(i)
    }
        
}

function repeticao2() {
    for (i = 1; i <= 100; i++) {
        if (i === 50) {
            break
        } else {
            console.log(i)
        }
    }
}

function repeticao3() {
    for (i = 1; i <= 100; i++) {
        if (i === 50) {
            continue
        } else {
            console.log(i)
        }
    }
}

console.log('Exercício 26 - Repetição parte I - Números de 1 a 100')
repeticao()

console.log('Exercício 26 - Repetição parte II - Números de 1 a 100, interrompendo ao chegar em 50')
repeticao2()

console.log('Exercício 26 - Repetição parte III - Números de 1 a 100, pulando o 50')
repeticao3()