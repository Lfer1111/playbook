const User = require("./../models/user")

class UserService {
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }
    static getInfo(user){
       return [user.id, user.username, user.name, user.bio]
    } 
    static updateUserUsername(User, newUsername){
        return User.username = newUsername
    }
    static getAllUsernames([user1, user2, user3]){
        return [user1.username, user2.username, user3.username]
    }
}

module.exports = UserService