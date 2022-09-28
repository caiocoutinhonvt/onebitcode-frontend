let pessoa = {
    nome: 'isaac',
    idade: 26,
    dizerOla(){
        console.log('Olá, mundo! Meu nome é ' + this.nome)
    }
}

pessoa.dizerOla()