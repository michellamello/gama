//Exercício 35

function maiorDeIdade(ano) {
    if (parseInt(new Date().getFullYear()) - parseInt(ano) >= 18) {
        return 'maior de idade'
    } else {
        return 'menor de idade'
    }
}

console.log(`A pessoa informada é ${maiorDeIdade(2020)}.`)