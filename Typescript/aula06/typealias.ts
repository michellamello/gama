//Alias
type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date; //Interface
}

type Funcionarios = Array<Funcionario>;

const funcionarios: Funcionario[] = [{
    nome: 'Michell',
    sobrenome: 'Mello',
    dataNascimento: new Date()
}];

function tratarFuncionarios(funcionarios: Funcionario[]) {
    for (let funcionario of funcionarios) {
        console.log('Nome do funcionario: ', funcionario.nome);
    }
}