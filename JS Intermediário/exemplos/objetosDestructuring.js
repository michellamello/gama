const pessoa = {
    nome: 'Michell',
    idade: 35,
    cidade: 'Ribeirão Pires'
}

//Notação de ponto

console.log(pessoa.nome)

//Notação de colchetes

console.log(pessoa['idade']) 

//Como desestruturar objetos

const {nome, idade, cidade} = pessoa

console.log(nome)
console.log(idade)
console.log(cidade)

const filmes = [
    {
        id: 1,
        titulo: 'Dilema das redes',
        descricao: 'Um documentário sobre tecnologia.',
        duracao: 120
    },
    {
        id: 2,
        titulo: 'Us',
        descricao: 'Um filme de terror legal demais.',
        duracao: 120
    },
    {
        id: 3,
        titulo: 'Corra',
        descricao: 'Um filme de suspense bem legal.',
        duracao: 120
    }
]

const [{id, titulo, descricao, duracao}] = filmes

console.log(titulo)

filmes.map(filme => console.log(filme.descricao))