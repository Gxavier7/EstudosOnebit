const Character = require("./Character")

class Mage extends Character{

  constructor(name, life, attack, defense, magic){
    super(name, life, attack, defense);
    this.magic = magic
  }

  attackEnemies(enemy){
    const damage = -1*(enemy.defense - this.attack - this.magic)
    damage <= 0 ? null : enemy.life -= damage 
  }

  heal(allied){
    allied.life += 2*this.magic;
  }

}

module.exports = Mage