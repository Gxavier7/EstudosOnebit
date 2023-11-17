class Product{
  constructor( name, description, price) {
    this.name = name
    this.description = description
    this.price = price
    this.inStock = 0
  }

  addToStock(quantity){
    this.inStock += quantity
    console.log(`A quantidade em estoque é: ${this.inStock}`);
  }

  calculateDiscount(percentage){
    const newPrice = (100-percentage)/100*this.price

    console.log(`O valor inicial era de R$ ${this.price}, com o desconto de ${percentage}% o valor final será de R$ ${newPrice}`);
  }
}

const milk = new Product("Milk", "Box of milk, 1L", 5);

console.log(milk);

milk.addToStock(30)

milk.calculateDiscount(30)