let fator = parseFloat(prompt("Qual número você deseja saber a tabuada?"));
let produto;
let resultados = "";

for (let index = 0; index <= 20; index++) {
    produto = fator * index;
    resultados += fator + "x" + index + "=" + produto + "\n";
}
alert(resultados);
