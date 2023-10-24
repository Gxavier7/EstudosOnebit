let option = 0;
let list = "";
const properties = [];
let quantity = 0;

do {
    option = parseFloat(
        prompt(
            "A quantidade de imóveis é: " +
                properties.length +
                "\nEscolha uma opção:\n1 - Cadastrar Imóvel\n2 - Listar imóveis\n3 - Sair"
        )
    );
    switch (option) {
        case 1:
            // Cadastrar imóvel
            const property = {};
            property.owner = prompt("Qual o nome do proprietário?");
            property.rooms = prompt("Qual a quantidade de quartos?");
            property.bathrooms = prompt("Qual a quantidade de banheiros");
            property.garage = prompt("Possui garagem?");
            let confirmation = confirm(
                "Tem certeza que deseja salvar essa propriedade com essas informações?\nProprietário: " +
                    property.owner +
                    "\nQuartos: " +
                    property.rooms +
                    "\nBanheiros: " +
                    property.bathrooms +
                    "\nPossui garagem: " +
                    property.garage
            );
            if (confirmation) {
                properties.push(property);
            }
            break;
        case 2:
            // Listar imóveis
            for (let i = 0; i < properties.length; i++) {
                alert(
                    "\nImóvel: " +
                        (i + 1) +
                        "\nNome do proprietário: " +
                        properties[i].owner +
                        "\nQuantidade de quartos: " +
                        properties[i].rooms +
                        "\nQuantidade de banheiros: " +
                        properties[i].bathrooms +
                        "\nPossui garagem: " +
                        properties[i].garage
                );
            }
            break;
        case 3:
            // Sair
            break;
        default:
            alert("Opção inválida!");
            break;
    }
} while (option < 3);
