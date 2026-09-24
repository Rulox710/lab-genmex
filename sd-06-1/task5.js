const prompt = require('prompt-sync')({ sigint: true });

// Type your code below this line!

function FriendList() {
  this.friends = [];

  this.addFriend = function(friend) {
    this.friends.push(friend);
  };

  this.printFriends = function() {
    console.log(this.friends);
  };
}

function askString(message) {
  return prompt(`${message}: `);
}

const FRIEND_LIST = new FriendList();
let number = askString('Ingrese cuantos amigos tiene');
for(let i = 0; i < number; i++) {
  let friend = askString(`Ingrese el nombre de su amigo #${i+1}`);
  FRIEND_LIST.addFriend(friend);
}
FRIEND_LIST.printFriends();


// Type your code above this line!
