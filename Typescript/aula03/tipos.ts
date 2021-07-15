//Boolean
const contaPaga: boolean = false;

//Number
const idade: number = 35;
const avaliacao: number = 4.5;

//String
const nome: string = 'Michell';

//Array
const idades: number[] = [23, 28, 45, 32];
const idades2: Array<number> = [30, 26, 42, 64];

//Tuple
let jogadores: [string, number, boolean];
jogadores = ['Fulano', 10, true]

//Enum
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

//Any
const retornoDaAPI: any = [123, 'Vitor', false];

//Void
function printarNaTela(msg:string): void {
    console.log(msg);
}

//Null e Undefined
const u: undefined = undefined;
const n: null = null;

//Object
function criar(objeto: object) {
    criar({
        propriedade: 1,
    })
}