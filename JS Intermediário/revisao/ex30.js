//Exercício 30

const prompt = require('prompt-sync')()

console.log('Exercício 30 - Jantar')
jantar()

function jantar() {
    valor = parseFloat(prompt('Informe o valor do jantar: R$ ')) 
    txGarcom = valor * (10 / 100)
    total = valor + txGarcom

    console.log(`O valor total do jantar foi de ${total.toFixed(2)}, sendo R$ ${txGarcom.toFixed(2)} referentes a taxa do garçom.`)
}