//Exercício  32

function numeros(num, num2) {
    if (num > num2) {
        console.log(`O maior número é ${num}.`)
    } else if (num < num2) {
        console.log(`O maior número é ${num2}.`)
    } else {
        console.log('Os números são iguais!')
    }
}

numeros (9, 9)