//Exercício 9

function fizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return 'FizzBuzz'
    }
    if (numero % 3 === 0) {
        return 'Fizz'
    }
    if (numero % 5 === 0) {
        return 'Buzz'
    }
    return numero
}

console.log(`Exercício 9: ${fizzBuzz(9)}`)