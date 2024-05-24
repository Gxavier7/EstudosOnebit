var spaceStation = [];
function createSpaceship(name, pilot, crewLimit, crew, inMission) {
    var spaceship = {
        name: name,
        pilot: pilot,
        crewLimit: crewLimit,
        crew: crew,
        inMission: inMission,
    };
    spaceStation.push(spaceship);
    alert("A nave ".concat(spaceship.name, " foi criada"));
}
function addMember(spaceship, member) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert("A tripulação ultrapassa o limite da espaçonave!");
    }
    else {
        spaceship.crew.push(member);
    }
}
function sendToMission(spaceship) {
    if (spaceship.inMission) {
        alert("A espaçonave já está em missão!");
    }
    else if (spaceship.crewLimit / 3 > 0 && spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        spaceship.inMission = true;
        alert("A espaçonave foi enviada para missão!");
    }
    else {
        alert("A tripula\u00E7\u00E3o dentro da espa\u00E7onave n\u00E3o \u00E9 suficiente");
    }
}
function listSpaceships() {
    spaceStation.forEach(function (e) {
        alert("A aeronave: ".concat(e.name, ", \nComandada pelo piloto ").concat(e.pilot, " \nCom uma tripula\u00E7\u00E3o de ").concat(e.crew.length, " pessoas \n") + (e.inMission ? "Est\u00E1 em miss\u00E3o" : "N\u00E3o est\u00E1 em miss\u00E3o"));
    });
}
function menu() {
    var option = Number(prompt("Selecione a op\u00E7\u00E3o desejada: \n 1 - Criar Espa\u00E7onave \n 2 - Adicionar Tripulante \n 3 - Enviar espa\u00E7onave para miss\u00E3o \n 4 - Listar espa\u00E7onaves \n 5 - Sair"));
    if (option <= 5 && option >= 1) {
        return option;
    }
    else {
        alert("Op\u00E7\u00E3o Inv\u00E1lida!");
        menu();
    }
}
function selectSpaceship() {
    var message = "Escolha uma espa\u00E7onave: \n";
    for (var i = 0; i < spaceStation.length; i++) {
        message += "".concat(i, " - ").concat(spaceStation[i].name, " \n");
    }
    return Number(prompt(message));
}
var option = 0;
while (option != 5) {
    switch (option) {
        case 1:
            var name_1 = prompt("Digite o nome da espa\u00E7onave:");
            var pilot = prompt("Digite o nome do Piloto:");
            var crewLimit = Number(prompt("Digite o n\u00FAmero m\u00E1ximo de tripulantes:"));
            var crew = [];
            var i = Number(prompt("Quantos tripulantes deseja acrescentar?"));
            for (i > 0; i--;) {
                var member = prompt("Digite o nome do ".concat(i, "\u00B0 tripulante"));
                crew.push(member);
            }
            var inMission = confirm("Essa espa\u00E7onave est\u00E1 em miss\u00E3o?");
            createSpaceship(name_1, pilot, crewLimit, crew, inMission);
            option = 0;
            break;
        case 2:
            var spaceship = selectSpaceship();
            if (spaceship >= 0 && spaceship < spaceStation.length) {
                var member = prompt("Qual o novo Tripulante?");
                addMember(spaceStation[spaceship], member);
            }
            option = 0;
            break;
        case 3:
            spaceship = selectSpaceship();
            if (spaceship >= 0 && spaceship < spaceStation.length) {
                sendToMission(spaceStation[spaceship]);
            }
            option = 0;
            break;
        case 4:
            listSpaceships();
            option = 0;
            break;
        default:
            option = menu();
            break;
    }
}
