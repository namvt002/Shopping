const { connection } = require("../../config/connection");


module.exports.find = (search)=>{
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM products WHERE product_name LIKE ?", search, (error, result)=>{
            if(error) {
                reject(error);
            }else{
                resolve(result);
            }
        })
    })
}

module.exports.createProduct = (newProduct) => {
    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO products SET ?", newProduct, function (error, result) {
            if (error) {
                reject(error);
            }
            else {
                resolve(result);
            }
        });
    })
}

module.exports.view = ()=>{
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM products", (error, result) => {
            if(error) {
                reject(error);
            }
            else{
                resolve(result);
            }
        })
    })
}

module.exports.edit = (oldid)=>{
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM products WHERE id = ?", oldid, (error, result) => {
            if (error) {
                reject(error);
            }else{
                resolve(result);
            }
        })
    })
}

module.exports.update = (product_name ,price,product_image, description, id)=>{
    return new Promise((resolve, reject) => {
        connection.query('UPDATE products SET product_name = ?, price = ?, product_image = ?, description = ? WHERE id = ?', [product_name ,price,product_image, description, id], function (error, result){
            if (error) {
                reject(error);
            }else{
               resolve(result);
            }
        })
    })
}

module.exports.delete = (iddelete) => {
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM products WHERE id = ?', iddelete , (error, result)=>{
            if(error){
                reject(error);
            }else{
                resolve(result);
            }
        });
    })
}

// module.exports.viewall = (idview)=>{
//     return new Promise((resolve, reject)=>{
//         connection.query('SELECT * FROM products WHERE id = ?', idview , (error, result)=>{
//             if(error){
//                 reject(error);
//             }else{
//                 resolve(result);
//             }
//         })
//     })
// }