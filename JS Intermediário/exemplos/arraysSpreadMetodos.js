// Array

const alunasGama = ['Paula', 'Maria', 'Estela', 'Clara']

//Acessar informações em um array

console.log(alunasGama[2]) //Estela

//Operador spread (...)
const alunasXp = [...alunasGama, 'Simara']

console.log(alunasXp)

//Métodos de iteração

for (let i = 0; i < alunasXp.length; i++) {
    console.log(alunasXp[i])
}

//Map
alunasXp.map(aluna => console.log(aluna))

//Filter
const numeros = [34, 45, 67, 90, 55, 76]

const numerosImpares = numeros.filter(numero => numero % 2 != 0)
console.log(numerosImpares)

const numerosPares = numeros.filter(numero => numero % 2 == 0)
console.log(numerosPares)

//Sort
const numerosOrdenadosCrescente = numeros.sort()
console.log(numerosOrdenadosCrescente)

const numerosOrdenadosDecrescente = numeros.sort((a, b) => b-a)
console.log(numerosOrdenadosDecrescente)

//Reduce - reduz array a um resultado de uma operação matemática
const numbers = [1, 34, 35]

const soma = numbers.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual
}, 0)
console.log(soma)