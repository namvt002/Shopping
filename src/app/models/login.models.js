const { connection } = require("../../config/connection");

module.exports.findUser = (username) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM users WHERE user_name = ?", username, function (error, result) {
            if (error) {
                reject(error);
            }
            else {
                if (result.length > 0) {
                   return resolve(result[0]);
                } else {
                   return resolve(null);
                }
            }
        });
    });
}