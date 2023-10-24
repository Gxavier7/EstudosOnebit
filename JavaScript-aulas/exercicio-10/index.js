const vagas = [];
// Funções
function menu() {
    return parseFloat(
        prompt(
            "Escolha uma opção:\n1 - Listar vagas disponíveis\n2 - Criar nova vaga\n3 - Visualizar vaga\n4 - Inscrever Candidato em uma vaga\n5 - Excluir uma vaga\n6 - Sair"
        )
    );
}
function informações() {
    const vagasEmTexto = vagas.reduce(function (texto, vaga, indice) {
        texto += indice + "° ";
        texto += array.nome;
        texto += " (" + array.candidatos.length + "candidatos ) ";
        texto += array.data;
        return texto;
    });
    alert(vagasEmTexto);
}
function criarVaga() {
    const nome = prompt("Insira um nome para a vaga");
    const description = prompt("Insira uma descrição para a vaga");
    const data = prompt("Insira uma data limite para a vaga");
    confirmation = confirm(
        "Deseja salvar esses valores?\nNome: " +
            nome +
            "\nDescrição: " +
            description +
            "\nData Final: " +
            data
    );
    if (confirmation) {
        const novaVaga = {
            nome,
            indice,
            description,
            data,
            candidatos: [],
        };
        vagas.push(novaVaga);
    }
}
function mostrarVaga() {
    const indice = parseFloat(
        prompt("Insira o número da vaga que você deseja ver:")
    );
    if (indice < vagas.length || indice < 0) {
        alert("Indice inválido");
        return;
    }

    const vaga = vagas[indice];
    const candidatosEmTexto = vaga.candidatos.reduce(function (
        textoFinal,
        candidato
    ) {
        return textoFinal + "\n - " + candidato;
    },
    "");
    alert(
        "Vaga nº: " +
            indice +
            "\nNome: " +
            vaga.nome +
            "\nDescrição: " +
            vaga.description +
            "\nData limite: " +
            vaga.data +
            "\nQuantidade de candidatos: " +
            vaga.candidatos.length +
            "\nCandidatos: " +
            candidatosEmTexto
    );
}
function inscreverCandidato() {
    const indice = parseFloat(
        prompt("Informe o indice da vaga para qual candidato quer se inscrever")
    );
    const candidato = prompt("Informe o nome do candidato");
    const vaga = vagas[indice];
    const confirmation = confirm(
        "Deseja cadastrar " +
            candidato +
            " nessa vaga?\nNome: " +
            vaga.nome +
            "\nDescrição: " +
            vaga.description +
            "\nData Limite: " +
            vaga.data
    );
    if (confirmation) {
        vaga.candidato.push(candidato);
    }
}
function excluirVaga() {
    const indice = parseFloat(
        prompt("Informe o indice da vaga para qual candidato quer se inscrever")
    );
    const vaga = vagas[indice];
    const confirmation = confirm(
        "Tem certeza que deseja excluir essa vaga? " +
            "\nNome: " +
            vaga.nome +
            "\nDescrição: " +
            vaga.description +
            "\nData Limite: " +
            vaga.data
    );
    if (confirmation) {
        vaga.splice(indice, 1);
    }
}
// Variáveis
let option = 0;
let confirmation;
// Programa
do {
    option = menu();
    switch (option) {
        case 1:
            // Listar vaga
            informações();
            break;
        case 2:
            // Criar vaga
            criarVaga();
            break;
        case 3:
            // Visualizar vaga
            mostrarVaga();
            break;
        case 4:
            // Inscrever candidato
            inscreverCandidato();
            break;
        case 5:
            // Excluir vaga
            excluirVaga();
            break;
        case 6:
            alert("Finalizando..");
            break;
        default:
            alert("Opção inválida!");
            break;
    }
} while (option !== 6);
