//Exercício 31

function diaDaSemana() {

    let dias = ['DOMINGO', 'SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA', 'SÁBADO']

    let dia = 5
    if (dia > 1 || dia < 7) {
        let diaSelecionado = dias[dia - 1]
        console.log(`Exercício 31 - O dia da semana informado é: ${diaSelecionado}`)
    } else {
        console.log('Dia inválido')
    }
}
    
diaDaSemana()