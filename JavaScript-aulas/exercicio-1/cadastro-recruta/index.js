const firstName = prompt("Digite seu primeiro nome");
const secondName = prompt("Digite seu segundo nome");
const studyArea = prompt("Digite seu campo de estudo");
const bornYear = prompt("Digite seu ano de nascimento");

let name = firstName + " " + secondName;
let age = 2022 - parseInt(bornYear);

alert(
    "Seu nome completo é: " +
        name +
        "\nSeu campo de estudo é: " +
        studyArea +
        "\nSua idade é: " +
        age +
        " anos"
);
