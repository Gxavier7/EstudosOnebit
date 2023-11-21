class Character{

  constructor(name, life, attack, defense){
    this.name = name;
    this.life = life;
    this.attack = attack;
    this.defense = defense;
  }

  attackEnemies(enemy){
    const damage = (enemy.defense - this.attack)
    damage >= 0 ? null : enemy.life += damage 
  }

}


module.exports = Character