const livros = require("./database");

//Obter o input do usuário

const readLine = require("readline-sync")

const entradaInicial = readLine.question("Deseja buscar um livro? (S/N) ")

//Se for sim, mostrar categorias disponíveis e pergunta qual caterogia escolhida
if (entradaInicial.toLocaleUpperCase() === "S") {
    console.log("Essas são as categorias disponíveis: ")
    console.log("Biografia", "/ Ficcao", "/ Terror")

    const entradaCategoria = readLine.question("Qual categoria você escolhe? ")

    const retorno = livros.filter(livro => livro.categoria.toLocaleUpperCase() === entradaCategoria.toLocaleUpperCase())
    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas)
    console.log("Esses são todos os livros disponíveis:")
    console.table(livrosOrdenados)
}

//Se for não, mostrar todos os livros em ordem crescente pela quantidade de páginas