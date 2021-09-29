const { connection } = require("../../config/connection");

module.exports.findUser = (username, password) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM users WHERE user_name = '"+ username + "' and password = '"+ password + "'",function (error, result) {
            if (error) {
                reject(error);
            }
            else {
                if (result.length > 0) {
                    resolve(result[0]);
                } else {
                    resolve(null);
                }
            }
        });
    });
}