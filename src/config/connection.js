var mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    // connectionLimit : 100,
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PASS,
    database        : process.env.DB_NAME,
});

let connect = () => {
    connection.connect((err) => {
        if (err) {
            console.log("database connection failed. exiting now...");
            console.error(err);
            process.exit(1);
        }
        console.log('Successfully connected to database');
    })
};

module.exports = {
    connect,
    connection
}