var planets = [];
function createPlanet(name, coords, situation, satellites) {
    planets.push({
        name: name,
        coords: coords,
        situation: situation,
        satellites: satellites
    });
    alert("Planeta criado com sucesso");
}
function changePlanetSituation(planet, situation) {
    planet.situation = situation;
    alert("A situa\u00E7\u00E3o do Planeta ".concat(planet.name, " foi alterada para ").concat(situation));
}
function addSatellite(planet, satelliteName) {
    planet.satellites.push(satelliteName);
    alert("O satelite ".concat(satelliteName, " foi adicionado ao planeta ").concat(planet.name));
}
function removeSatellite(name, planet) {
    planet.satellites = planet.satellites.filter(function (satelite) { return satelite != name; });
    alert("O sat\u00E9lite ".concat(name, " foi removido"));
}
function listSatellites(planet) {
    var satellitesList = "";
    planet.satellites.forEach(function (e) {
        satellitesList += e + "\n ";
    });
    return satellitesList;
}
function listPlanets() {
    var textList = "";
    planets.forEach(function (e) {
        textList += "Planeta: ".concat(e.name, " \nCoordinates: ").concat(e.coords[0], "\u00B0, ").concat(e.coords[1], "', ").concat(e.coords[2], "\" \nSituation: ").concat(e.situation, " \nSatellites: ").concat(listSatellites(e));
    });
}
