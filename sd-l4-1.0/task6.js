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

export class Party {
  constructor(party) {
    if(party === undefined) this.party = [];
    else this.party = party;
  }

  addMember(member) {
    this.party.push(member);
  }

  removeMember(member) {
    let index = this.party.indexOf(member);
    if (index !== -1) {
      this.party.splice(index, 1);
    }
  }

  info() {
    return "Party members: "
      + this.party.map(member => member.name).join(", ");
  }
}

const PARTY = new Party([new Player('Tinky Winki', 1), new Player('Dipsy', 3), new Player('Lala', 2), new Player('Po', 4)]);
console.log(PARTY.info());

const joe = new Player('Joe', 10)
PARTY.addMember(joe);
console.log(PARTY.info());

PARTY.removeMember(joe);
console.log(PARTY.info());
