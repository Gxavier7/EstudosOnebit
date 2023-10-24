function calcRetangulo(base, altura) {
    return base * altura;
}
function calcCirculo(raio) {
    return 3.14 * (raio * raio);
}
function calcTrapezio(baseMaior, baseMenor, altura) {
    let area = (calcRetangulo(baseMaior, baseMenor) * altura) / 2;
    return area;
}
let option = 0;
let medidaAltura = 0;
let medidaBase = 0;
let medidaBaseMaior;
let medidaBaseMenor;
let medidaLado;
let medidaRaio;

do {
    option = parseFloat(
        prompt(
            "Esta calculadora gera as áreas das seguintes formas:\n1 - Triângulo\n2 - Retângulo\n3 - Quadrado\n4 - Trapézio\n5 - Círculo\n6 - Sair\nEscolha uma das formas"
        )
    );
    switch (option) {
        case 1:
            // Triângulo
            medidaBase = parseFloat(
                prompt("Insira o valor da base do triângulo")
            );
            medidaAltura = parseFloat(
                prompt("Insira o valor da altura do triângulo")
            );
            let triangulo = calcRetangulo(medidaBase, medidaAltura) / 2;
            alert("O valor da área do triângulo é: " + triangulo);
            break;
        case 2:
            // Retângulo
            medidaBase = parseFloat(
                prompt("Insira o valor da base do retângulo")
            );
            medidaAltura = parseFloat(
                prompt("Insira o valor da altura do retângulo")
            );
            let retangulo = calcRetangulo(medidaBase, medidaAltura);
            alert("O valor da área do retângulo é: " + retangulo);
            break;
        case 3:
            // Quadrado
            medidaLado = parseFloat(
                prompt("Insira o valor da base do quadrado")
            );
            quadrado = calcRetangulo(medidaLado, medidaLado);
            alert("O valor da área do quadrado é: " + quadrado);
            break;
        case 4:
            // Trapézio
            medidaBaseMaior = parseFloat(
                prompt("Insira o valor da base maior do trapézio")
            );
            medidaBaseMenor = parseFloat(
                prompt("Insira o valor da base menor do trapézio")
            );
            medidaAltura = parseFloat(
                prompt("Insira o valor da altura do trapézio")
            );
            let trapezio = calcTrapezio(
                medidaBaseMaior,
                medidaBaseMenor,
                medidaAltura
            );
            alert("O valor da área do trapézio é: " + trapezio);
            break;
        case 5:
            // Círculo
            medidaRaio = parseFloat(
                prompt("Insira o valor do raio do círculo")
            );
            let circulo = calcCirculo(medidaRaio);
            alert("O valor da área do circulo é: " + circulo);
            break;
        case 6:
            alert("Finalizando..");
            break;
        default:
            alert("Opção inválida");
            break;
    }
} while (option < 6);
