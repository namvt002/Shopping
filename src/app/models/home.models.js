const { connection } = require("../../config/connection");

module.exports.viewall = ()=>{
    return new Promise((resolve, reject)=>{
        connection.query('SELECT * FROM products', (error, result)=>{
            if(error){
                reject(error);
            }else{
                resolve(result);
            }
        })
    })
}