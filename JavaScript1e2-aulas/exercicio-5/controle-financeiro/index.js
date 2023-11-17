let menu;
let saldo = parseFloat(
    prompt("Qual a quantidade de dinheiro que você possui?")
);
let movimentacao;

do {
    menu = parseFloat(
        prompt(
            "Seu saldo é: R$" +
                saldo +
                "\n1 - Acrescentar Dinheiro\n2 - Retirar dinheiro\n3 - Sair"
        )
    );
    switch (menu) {
        case 1:
            movimentacao = parseFloat(prompt("Qual valor deseja acrescentar?"));
            saldo += movimentacao;
            break;
        case 2:
            movimentacao = parseFloat(prompt("Qual valor deseja retirar?"));
            saldo -= movimentacao;
            break;
        case 3:
            break;
        default:
            alert("Valor não aceito");
            break;
    }
} while (menu < 3);
