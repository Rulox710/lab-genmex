export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;

    this.expPoints = 0;
    this.inventory = new Inventory();
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

class Inventory{
  constructor() {
    this.inventory = [];
  }

  addItem(name) {
    this.inventory.push(name);
  }

  removeItem(name) {
    let index = this.inventory.indexOf(name);
    if (index !== -1) {
      this.inventory.splice(index, 1);
    }
  }

  size() {
    return this.inventory.length;
  }

  info() {
    return `${this.size()} items: ${this.inventory.join(', ')}`;
  }
}

const jon = new Player('John', 3);
jon.inventory.addItem('Potion');
jon.inventory.addItem('Elixir');
jon.inventory.addItem('Feather Phoenix');
jon.inventory.addItem('Sword');
console.log(jon.inventory.info());

jon.inventory.removeItem('Potion');
console.log(jon.inventory.info());
