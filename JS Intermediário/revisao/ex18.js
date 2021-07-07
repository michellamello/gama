//Exercício 18

function descontoValor (valor) {
    desconto = valor * (5 / 100)
    return desconto.toFixed(2)
}

console.log(`Exercício 18: O valor do desconto é de R$ ${descontoValor(100)}`)