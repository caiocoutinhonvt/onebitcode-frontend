const imoveis = []
let opcao = ""

do {
    opcao = prompt(
        " Bem vindo ao cadastro de imóveis" +
        "\n\n Total de imóveis = " + imoveis.length + 
        "\n Escolha uma opção: \n 1. Novo imóvel \n 2. Lista de Imoveis \n 3. Sair"
        
        
        )

    switch (opcao){
        case "1":
            const imovel = {}

            imovel.proprietario = prompt("Informe o nome do proprietário: ")
            imovel.quartos = prompt("Quantos quartos possue o imóvel:")
            imovel.garagem = prompt("O imóvel possue garagem? (Sim/Não) ")
            
            const confirmação = confirm(
                "Você deseja salvar este imóvel?" +
                "\n Proprietário: " + imovel.proprietario +
                "\n Quartos: " + imovel.quartos +
                "\n Garagem: " + imovel.garagem
            )

            if(confirmação){
                imoveis.push(imovel)

            }
            break
        case "2":
            for (let i = 0; i < imoveis.length; i++) // Cria o indice zerado // esse i < imoveins.lenght garante que vai passar pela lista inteira de imoveis // e ao fim de cada execução aumentar 1  {
                alert(
                "Imóvel " + (i + 1) +
                "\nProprietário: " + imoveis[i].proprietario +
                "\nQuartos: " + imoveis[i].quartos +
                "\nBanheiros: " + imoveis[i].banheiros +
                "\nPossui Garagem? " + imoveis[i].garagem
                )
            
            break
        case "3":
            alert('Encerrando....')
            break   
        default:
            alert("Opção inválida!")
        

    }

} while (opcao !== "3")