//Exercício 12

function parImpar(numero) {
    if (numero % 2 === 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

console.log(`Exercício 12: O número informado é ${parImpar(5)}.`)