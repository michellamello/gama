//Exercício 22

var saldoInicial = 100
var saldoAtual = 0
var valorDepositado = 0
var valorSacado = 0

const readline = require('readline')

    var resp = ''

    var leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

console.log('\nExercício 22 - Banco GAMA')

function principal() {
    console.log('---\nOpções disponíveis:\n1. Depósitos\n2. Saques\n3. Saldo disponível\n0. Sair')
        leitor.question('\nDigite a opção desejada: ', function(answer) {
        resp = answer

        switch (resp) {
            
            case '1':
                console.log('---\n|Depósitos|')
                leitor.question('Informe o valor a ser depositado: R$ ', function(answer) {
                valorDepositado += parseFloat(answer)
                principal()
                })
                break
            case '2':  
                console.log('---\n|Saques|')
                leitor.question('Informe o valor a ser sacado: R$ ', function(answer) {
                valorSacado += parseFloat(answer)
                principal()
                })
                break
            case '3':
                saldoAtual = valorDepositado - valorSacado
                console.log('---\n|Saldo|')
                console.log(`Saldo atual: R$ ${(saldoAtual + saldoInicial).toFixed(2)}\n`)
                principal()
                break
            case '0':
                console.log('\nAté breve!')
                leitor.close()
                break
            default:
                console.log('\nOpção inválida\n')
                principal()
        }
    })
    
}

function depositos() {
    
}

function saques() {
    
}

function saldo() {
    
}

principal()