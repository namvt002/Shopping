const { connection } = require("../../config/connection");

module.exports.view = (username) => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM users WHERE user_name = ?", username, function (error, result) {
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

module.exports.update = (first_name, last_name, phone, username, password, email, avatar, id)=>{
    return new Promise((resolve, reject) => {
        connection.query('UPDATE users SET first_name = ?, last_name = ?, phone = ?, user_name = ?, password = ?, email = ?, avatar = ? WHERE id = ?', [first_name, last_name, phone, username, password, email, avatar, id], function (error, result){
            if (error) {
                reject(error);
            }else{
               resolve(result);
            }
        })
    })
}


