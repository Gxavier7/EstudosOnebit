let option;

do {
    option = parseFloat(
        prompt(
            "Qual opção vc deseja?\n1-Pular\n2-Abaixar\n3-Direita\n4-Esquerda\n5-Sair"
        )
    );
    switch (option) {
        case 1:
            alert("Você pulou");
            break;
        case 2:
            alert("Você abaixou");
            break;
        case 3:
            alert("Você andou para direita");
            break;
        case 4:
            alert("Você andou para esquerda");
            break;
        default:
            break;
    }
} while (option < 5);
