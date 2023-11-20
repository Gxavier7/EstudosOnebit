class Immobile{

  constructor( area, price, dono ){
    this.area = area;
    this.price = price  
  }

  getPricePerSquareMeter(){
    return this.price / this.area
  }

}

class House extends Immobile {}

const land = new Immobile(200, 50000 );
const someHouse = new House(150, 60000 );

console.log(land);
console.log(someHouse);

class Apartment extends Immobile{

  constructor(number, area, price){
    super(area, price);
    this.number = number;
  }

  getFloor(){
    return this.number.slice(0, -2);
  }

}

const apt = new Apartment("201", 100, 160000);

console.log(apt.getFloor());