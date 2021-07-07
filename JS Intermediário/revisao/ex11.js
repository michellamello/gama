//Exercício 11

function imc(peso, altura) {
    calculoImc = peso / Math.pow(altura, 2)
    return calculoImc.toFixed(2)
}

console.log(`Exercício 11: O IMC é ${imc(80, 1.78)}`)