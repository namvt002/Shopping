const mysql = require('mysql');
require('dotenv').config();


const pool = mysql.createPool({
    connectionLimit : 100, // gioi han ket noi
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PASS,
    database        : process.env.DB_NAME,
});

function connect(){
    pool.getConnection((err, connection)=>{
        if(err) throw err; // throw de tao ra 1 ngoai le va in ra loi
        console.log('Connected as ID ' + connection.threadId);
    });
}

module.exports = { connect };
