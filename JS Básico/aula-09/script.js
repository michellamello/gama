//1. FizzBuzz
//Divisível por 3 => 'Fizz'
//Divisível por 5 => 'Buzz'
//Divisível por 3 e 5 => 'FizzBuzz'
//Se não for um número => 'Não é um número'
//Se não for divisível por 3 nem 5 => Repetir entrada

let resultado1 = fizzBuzz();
console.log("Exercício 1: " + resultado1)

function fizzBuzz(entrada) {
    if (typeof entrada !== "number")
        return "Não é um número";
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return "FizzBuzz";
    if (entrada % 3 === 0)
        return "Fizz";
    if (entrada % 5 === 0)
        return "Buzz";
    
    return entrada;
}

//2. Inverter string

let newStr = "";

function reverseString(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    console.log("Exercício 2: " + newStr);
}

let resultado2 = reverseString("Hello Gama Academy");

//3. Conversor Celsius p/ Fahrenheit

function convertToFahrenheit(value) {
    return value * 1.8 + 32;
}

let resultado3 = convertToFahrenheit(30);
console.log("Exercício 3: " + resultado3 + "°F");

//4. To-do list

//Captura campos do HTML
const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists = []

//Escuta botão
newListForm.addEventListener('submit', function(e) {
    e.preventDefault() //Evita que página recarregue
    const listName = newListInput.value; //Obtém item preenchido no input
    if (listName === null || listName === '') return //Verifica se input está vazio. Se estiver, para (return sem parâmetro)
    const list = createList(listName) //Cria item da lista
    newListInput.value = null //Limpa input
    lists.push(list) //inclui item preenchido no array lists
    render() //Mostra na tela
}) 

function createList(name) { //Montagem de objeto lista
    return {id: Date.now().toString(), name: name }
}

function clearElement(element) { //Limpeza de primeiro item da lista para exibição correta
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

function render() { //Função para mostrar itens na tela
    clearElement(listContainer) //Limpa lista
    lists.forEach(function(list) { //Para cada item em lists
        const item = document.createElement('li') //Cria um li no HTML
        item.classList.add('item') //Linka li ao item
        item.innerText = list.name //Insere item no li
        listContainer.appendChild(item) //Exibe li na tela
    })
}