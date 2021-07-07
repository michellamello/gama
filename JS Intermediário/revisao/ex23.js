//Exercício 23

function cincoEmCinco() {
    console.log('Exercício 23 - Contagem de 5 em 5, de 10 a 60 pulando 35 e 45:')

    for (i = 10; i <=60; i += 5) {

        if (i === 35 || i === 45){
            console.log('PULOU')
        } else {
            console.log(i)    
        }
    }
}

cincoEmCinco()