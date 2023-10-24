const palavra = prompt("Escreva uma palavra teste:");
let inverso = "";
let verify = true;

for (let index = palavra.length - 1; index >= 0; index--) {
    inverso += palavra[index];
}
console.log(inverso);

for (let index = 0; index < palavra.length - 1; index++) {
    if (palavra[index] === inverso[index] && verify == true) {
        verify = true;
    } else {
        verify = false;
    }
}
if (verify == true) {
    alert(
        "A palavra: " + palavra + " é palindromo com seu inverso: " + inverso
    );
} else
    alert(
        "A palavra: " +
            palavra +
            " não é palindromo com seu inverso: " +
            inverso
    );
