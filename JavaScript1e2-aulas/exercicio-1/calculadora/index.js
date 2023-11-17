let firstNumber = prompt("Insira o primeiro número:");
let secondNumber = prompt("Insira o segundo número:");

let numberOne = parseFloat(firstNumber);
let numberTwo = parseFloat(secondNumber);

let sum = numberOne + numberTwo;
let subtraction = numberOne - numberTwo;
let multiplication = numberOne * numberTwo;
let division = numberOne / numberTwo;

alert(
    "O resultado dos calculos é:\n" +
        "\nSoma: " +
        sum +
        "\nSubtração: " +
        subtraction +
        "\nMultiplicação: " +
        multiplication +
        "\nDivisão: " +
        division
);
