export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;

    this.expPoints = 0;
  }

  info() {
    return `${this.name} has reached Level ${this.level}!
${this.name} has ${this.expPoints} and need ${(2**this.level) - this.expPoints} expPoints more to level up!`;
  }

  /**
   * expRate = 2^(level-1)
   */
  addExperiencePoints(expPoints) {
    this.expPoints += expPoints;
    let neededExp = 2**this.level;
    if(this.expPoints >= neededExp) {
      this.levelUp();
      this.expPoints -= neededExp;
    }
  }

  levelUp() {
    this.level += 1;
  }
}

const timy = new Player('Timmy', 3);
console.log(timy.info() + "\n");

timy.addExperiencePoints(3);
console.log(timy.info()+ "\n");

timy.addExperiencePoints(5);
console.log(timy.info()+ "\n");

timy.addExperiencePoints(17);
console.log(timy.info()+ "\n");
