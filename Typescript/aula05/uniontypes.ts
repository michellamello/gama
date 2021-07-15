//Union Types

const nota: string | number = 5;

function exibirNota(nota: number | string) {
    console.log(`A nota é: ${nota}`);
}

exibirNota('10');
exibirNota(10);