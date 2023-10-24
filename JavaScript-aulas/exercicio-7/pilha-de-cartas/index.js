let pilha = ["7 de copas", "2 de espadas", "4 de copas", "A de ouros"];
let options = 0;
let removed;
do {
    let list = "";
    for (let index = pilha.length - 1; index >= 0; index--) {
        list += index + 1 + "° " + pilha[index] + "\n";
    }
    options = parseFloat(
        prompt(
            "As cartas da pilha são: \n" +
                list +
                "Escolha uma opção\n1- Colocar carta\n2- Retirar Carta\n3- Sair"
        )
    );
    switch (options) {
        case 1:
            pilha.push(prompt("Insira o nome da carta:"));
            break;
        case 2:
            removed = pilha.pop(1);
            alert("A carta removida foi: \n" + removed);
            break;
        case 3:
            break;
        default:
            alert("Opção inválida");
            break;
    }
} while (options < 3);
