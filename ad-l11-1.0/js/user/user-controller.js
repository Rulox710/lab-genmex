class UserController{

    constructor(){
        this.users = [];
    }

    getUsers(){
        return this.users;
    }

    add(user){
        if(!this.findById(user.id)) this.users.push(user);
        else throw new Error('El usuario ya existe');
    }

    remove(user){
        if (!this.findById(user.id)) {
            throw new Error('El usuario no existe');
        }
        this.users = this.users.filter(function(ele) {
            return ele != user;
        });
    }

    findByEmail(email){
        for (let i = 0; i < this.users.length; i++) {
            if(this.users[i].email === email)
                return this.users[i];
        }
    }

    findById(id){
        for (let i = 0; i < this.users.length; i++) {
            if(this.users[i].id === id)
                return this.users[i];
        }
    }


}


module.exports = UserController;
