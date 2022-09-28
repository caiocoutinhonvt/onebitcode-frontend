function ola() {
    console.log('Olá, mundo!')
}

function dobro(x){
    alert("O dobro de " + x + " é " + (x * 2))
}

const numero = prompt("Digite um número:")

alert(dobro(numero))


    // function criarUsuario(nome, email, senha, tipo = "leitor") {
    //     const usuario = { nome, email, senha, tipo }
    //     console.log(usuario)
    //   }
    
    //   function novoUsuario(nome, tipo = "leitor", email, senha) {
    //     const usuario = { nome, email, senha, tipo }
    //     console.log(usuario)
    //   }
    
    //   criarUsuario("Isaac", "isaac@email.com", "1234")
    //   novoUsuario("Isaac", "isaac@email.com", "1234")