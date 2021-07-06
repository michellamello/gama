//Classes

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read() {
        return `Estou lendo ${this.title}`
    }
}

let book = new Book("Algoritmos para viver", "Brian", 500);
let otherBook = new Book("Um Exu em Nova York", "Cidinha da Silva", 100);

console.log(book, otherBook);

console.log(book.read());
console.log(otherBook.read());

//Herança

class ITBook extends Book {
    constructor(title, author, pages, technology) {
        super(title, author, pages);
        this.technology = technology;
    }
}

let itBook = new ITBook("Algoritmos para viver", "Brian", 500, "Algoritmos");

console.log(itBook);
console.log(itBook.title);
console.log(itBook.technology);

//Encapsulamento

class Person {
    constructor(name) {
        this._name = name;
    }

    get name() { //Atribuição de propriedade
        return this._name;
    }

    set name(value) { //Reatribuição de propriedade
        this._name = value;
    }
}

let person = new Person("Michell"); //Atribuição de propriedade
person.name = "Mi"; //Reatribuição de propriedade
console.log(person.name);