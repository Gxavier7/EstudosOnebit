const firstName = prompt("Insira o primeiro nome");
const firstSpeed = prompt("Insira a velocidade do " + firstName);
const secondName = prompt("Insira o segundo nome");
const secondSpeed = prompt("Insira a velocidade do " + secondName);

// Usando If Else

// if (firstSpeed > secondSpeed) {
//     alert("O " + firstName + " é mais rápido");
// } else {
//     if (firstSpeed < secondSpeed) {
//         alert("O " + secondName + " é mais rápido");
//     } else {
//         alert("As duas velocidades são iguais");
//     }
// }

// Usando Operador ternário

let Comparation =
    firstSpeed > secondSpeed
        ? alert("O " + firstName + " é mais rápido")
        : secondSpeed > firstSpeed
        ? alert("O " + secondName + " é mais rápido")
        : alert("As duas velocidades são iguais");
