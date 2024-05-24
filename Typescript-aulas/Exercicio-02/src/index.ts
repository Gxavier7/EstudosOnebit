type Planet = {
    name:string,
    coords:Coordinates,
    situation:Situation,
    satellites:string[]
}

const planets: Planet[] = [] 

type Coordinates = [degree: number, minutes: number, seconds: number];

type Situation = "Habitado" | "Habitável" | "Inabitável" | "Inexplorado"; 

function createPlanet (name:string, coords:Coordinates, situation:Situation, satellites:string[]) {  
    planets.push({
        name,
        coords,
        situation,
        satellites
    })

    alert(`Planeta criado com sucesso`)
} 

function changePlanetSituation (planet:Planet, situation:Situation) {
    planet.situation = situation

    alert(`A situação do Planeta ${planet.name} foi alterada para ${situation}`)
}

function addSatellite (planet:Planet, satelliteName: string) {
    planet.satellites.push(satelliteName)
    
    alert(`O satelite ${satelliteName} foi adicionado ao planeta ${planet.name}`)
}

function removeSatellite (name:string, planet:Planet) {
    planet.satellites = planet.satellites.filter(satelite => satelite != name)

    alert(`O satélite ${name} foi removido`)
}

function listSatellites (planet:{satellites:string[]}) {
    let satellitesList: string = ""
    
    planet.satellites.forEach( e => {
        satellitesList += e + "\n "
    })

    return satellitesList
}

function listPlanets() {
    let textList:string = ""

    planets.forEach(e => {

        textList += `Planeta: ${e.name} \nCoordinates: ${e.coords[0]}°, ${e.coords[1]}', ${e.coords[2]}" \nSituation: ${e.situation} \nSatellites: ${listSatellites(e)}`
    });
}







