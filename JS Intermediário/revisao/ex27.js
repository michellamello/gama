//Exercício 27

var resultado = 0

const prompt = require('prompt-sync')()

console.log('\nExercício 27 - Calculadora')

principal()

function principal() {
    valor1 = parseFloat(prompt('\nPrimeiro número: ')) 
    valor2 = parseFloat(prompt('\nSegundo número: ')) 
        
    console.log('---\nSelecioine a operação desejada:\n1. Soma\n2. Subtração\n3. Multiplicação\n4. Divisão\n0. Sair')
        var resp = prompt('\nDigite a opção desejada: ')

        switch (resp) {
            
            case '1':
                resultado = valor1 + valor2
                console.log(`---\nO resultado da soma é: ${resultado}`)
                principal()
                break
            case '2':  
                resultado = valor1 - valor2
                console.log(`---\nO resultado da subtração é: ${resultado}`)
                principal()
                break
            case '3':
                resultado = valor1 * valor2
                console.log(`---\nO resultado da multiplicação é: ${resultado}`)
                principal()
                break
            case '4':
                resultado = valor1 / valor2
                if (valor2 === 0) {
                    console.log(`---\nNão existe divisão por zero!`)    
                } else {
                    console.log(`---\nO resultado da divisão é: ${resultado}`)
                }
                principal()
                break
            case '0':
                console.log('\nAté breve!')
                break
            default:
                console.log('\nOpção inválida\n')
                principal()
        }
}