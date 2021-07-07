//Exercício 19

function converteMoeda(valorReal) {
    valorDolar = valorReal / 5.26
    return valorDolar.toFixed(2)
}

console.log(`Exercício 19: O valor convertido em dólar utilizando a cotação de 07/07/2021 é de R$ ${converteMoeda(100)}`)