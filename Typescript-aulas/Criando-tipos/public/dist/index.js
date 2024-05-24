// Um Alias é um nome personalizado para um tipo e pode ser atribuido a outras variáveis
var homePlanet;
homePlanet = "Terra";
// Também é possível utilizar um Alias para declarar arrays personalizados
var milkyWay;
// Repare que usando um Alias temos acesso ao autocompletar
// dentro do escopo da função e temos um código muito mais 
// limpo que se usássemos a definição inteira do tipo Planet
function checkPlanet(planet) {
    if (planet === "Terra") {
        console.log("Estamos na Terra");
    }
}
