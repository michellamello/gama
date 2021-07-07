//Exercício 28

const prompt = require('prompt-sync')()

console.log('Exercício 28 - Desconto')
desconto()

function desconto () {
    var preco = parseFloat(prompt('Informe o preço da mercadoria: ')) 
    var desconto = parseFloat(prompt('Informe o desconto percentual: ')) 

    var valorMercadoria = preco - (preco * desconto / 100)

    console.log(`O valor da mercadoria com desconto é de R$ ${valorMercadoria}.`)
}