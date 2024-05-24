let sun;
sun.name = "Sol";
sun.mass = 1.989 * (10 ** 30);
sun.age = 4.603 * (10 ** 9);
sun.planets = [];
//Interfaces em classes
class MilkyWayPlanet {
    name;
    mass;
    population;
    satellites;
    constructor(name, mass, population) {
        this.name = name;
        this.mass = mass;
        this.population = population;
    }
    createSatellite(name) {
    }
}
