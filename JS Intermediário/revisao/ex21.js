//Exercício 21

function dezEmDez() {
    for (i = 20; i <= 100; i += 10) {
        if (i === 60 || i === 90) {
             console.log('CONTINUE')
        } else {
            console.log(i)
        }
    }
}

console.log('Exercício 21:')
dezEmDez()