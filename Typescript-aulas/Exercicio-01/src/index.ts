const spaceStation = [];

function createSpaceship(name: string, pilot: string, crewLimit: number, crew: string[], inMission: boolean) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew,
        inMission,
    }

    spaceStation.push(spaceship);

    alert(`A nave ${spaceship.name} foi criada`)
}

function addMember(spaceship:{crewLimit: number, crew: string[]}, member: string): void {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert("A tripulação ultrapassa o limite da espaçonave!");
    } else {
        spaceship.crew.push(member)
    }
}

function sendToMission(spaceship: {name: string, pilot: string, crewLimit: number, crew: string[], inMission: boolean}) {
    if (spaceship.inMission) {
        alert("A espaçonave já está em missão!");
    } else if (spaceship.crewLimit / 3 > 0 && spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        spaceship.inMission = true;
        alert("A espaçonave foi enviada para missão!");
    } else {
        alert(`A tripulação dentro da espaçonave não é suficiente`)
    }
} 

function listSpaceships() {
    spaceStation.forEach(e => {
        alert(`A aeronave: ${e.name}, \nComandada pelo piloto ${e.pilot} \nCom uma tripulação de ${e.crew.length} pessoas \n` + (e.inMission ? `Está em missão` : `Não está em missão`))    
    });

    
}

function menu() {
    let option = Number(prompt(`Selecione a opção desejada: \n 1 - Criar Espaçonave \n 2 - Adicionar Tripulante \n 3 - Enviar espaçonave para missão \n 4 - Listar espaçonaves \n 5 - Sair`))

    if (option <= 5 && option >= 1) {
        return option
    } else {
        alert(`Opção Inválida!`)
        menu();
    }
}

function selectSpaceship() {
    let message = `Escolha uma espaçonave: \n`
    for(let i = 0; i < spaceStation.length; i++) {
        message += `${i} - ${spaceStation[i].name} \n`
    }

    return Number(prompt(message))
}

let option = 0;

while (option != 5) {
    switch (option) {


        case 1:
            const name = prompt(`Digite o nome da espaçonave:`)
            const pilot = prompt(`Digite o nome do Piloto:`)
            const crewLimit = Number(prompt(`Digite o número máximo de tripulantes:`))
            const crew = []

            let i = Number(prompt(`Quantos tripulantes deseja acrescentar?`))
            for ( i > 0; i--; ) {
                const member = prompt(`Digite o nome do ${i}° tripulante`)
                crew.push(member)
            }

            const inMission = confirm(`Essa espaçonave está em missão?`)

            createSpaceship(name, pilot, crewLimit, crew, inMission)

            option = 0
            break;
        

        case 2:
            

            let spaceship = selectSpaceship();

            if (spaceship >= 0 && spaceship < spaceStation.length) {
                const member = prompt(`Qual o novo Tripulante?`)

                addMember(spaceStation[spaceship], member);
            }
            
            option = 0
            break;


        case 3:

            spaceship = selectSpaceship()

            if (spaceship >= 0 && spaceship < spaceStation.length) {
                sendToMission(spaceStation[spaceship]);
            }

            option = 0
            break;


        case 4:

            listSpaceships();

            option = 0
            break;
    
        default:
            option = menu()
            break;
    }
}