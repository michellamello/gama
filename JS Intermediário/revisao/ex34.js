//Exercício 34

function calculaMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3

    if (media >= 7) {
        return 'Aprovado'
    }
    if (media >= 5 && media < 7) {
        return 'Recuperação'
    }
    if (media < 5) {
        return 'Reprovado'
    }
}

console.log(`Exercício 34: Resultado ${calculaMedia(8,5,8)}.`)