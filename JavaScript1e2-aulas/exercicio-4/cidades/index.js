let count = 0;
let cidades = "";
const name = prompt("Insira seu nome");
let continuar = prompt("Você já visitou alguma cidade? S/N");

while (continuar === "S") {
    let cidade = prompt("Qual o nome da cidade visitada?");
    cidades += " - " + cidade + "\n";
    count++;
    continuar = prompt("Você já visitou alguma outra cidade? S/N");
}

alert(
    "Turista: " +
        name +
        "\nVocê visitou: " +
        count +
        " cidades\nAs cidades que você visitou foram:\n" +
        cidades
);
