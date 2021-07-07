//Exercício 29

const prompt = require('prompt-sync')()

console.log('Exercício 29 - Viagem')
viagem()

function viagem() {
    let distancia = parseFloat(prompt('Informe a distância a ser percorrida: ')) 
    let velocidade = parseFloat(prompt('Informe a Velocidade média em Km/h: ')) 

    resultado = (distancia / velocidade) * 60

    console.log(`A distância informada será percorrida em ${Math.round(resultado)} minutos.`)
}
