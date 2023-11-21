const Character = require("./Character")

class Thief extends Character{

  attackEnemies(enemy){
    const damage = -2*(enemy.defense - this.attack)
    damage <= 0 ? null : enemy.life -= damage 
  }

}

module.exports = Thief
