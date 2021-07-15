//Interfaces - Preferir essa a tipos

interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario {
    return {
        nome: 'Michell',
        email: 'michell@teste.com'
    }
}

function setUser(usuario: Usuario) {
    //...
}