//Valores nulos ou opcionais

let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string; //? = Item opcional
}

const contato: Contato = {
    nome: 'Michell',
    telefone1: '123456789',
}