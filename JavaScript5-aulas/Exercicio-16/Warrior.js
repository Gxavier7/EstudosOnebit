const Character = require("./Character")

class Warrior extends Character{

  constructor(name, life, attack, defense, shield, position){
    super(name, life, attack, defense);
    this.shield = shield;
    this.position = position;
    this.startLife();
  }

  verifyPosition(position){
    return this.position == position;
  }

  atackEnemies(enemy){
    this.verifyPosition('ataque') ? super.atack(enemy) : null;
  }

  startLife(){
    this.verifyPosition('defense') ? this.defense += this.shield: null;
  };

  changePosition(){
    if (this.position == 'ataque') {
      this.position = 'defense';
      this.startLife()
    }else{
      this.position = 'ataque';
      this.defense -= this.shield
    }
  }

}

module.exports = Warrior