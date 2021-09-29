const { connection } = require("../../config/connection");
const bcrypt = require('bcrypt')


var User = {};

User.createUser = (newUser) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(newUser.password, 10, (error, hash) => {
            newUser.password = hash
            connection.query("INSERT INTO users SET ?", newUser, function (error, result) {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(newUser);
                }
            });
        })
    })
}

module.exports = User;