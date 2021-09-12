const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    connectionLimit : 100,
    host            : process.env.DB_HOST,
    user            : process.env.DB_USER,
    password        : process.env.DB_PASS,
    database        : process.env.DB_NAME,
});


exports.view = (req, res) =>{

    connection.query('SELECT * FROM user WHERE status = "active"', (err, rows) => {
        // When done with the connection, release it
        if (!err) {
        //   let removedUser = req.query.removed;
          res.render('pages/admin', {css: "/css/admin.css", title: 'admin', rows});
        } else {
          console.log(err);
        }
        // console.log('The data from user table: \n', rows);
      });
}

exports.find = (req, res) => {

    let searchTerm = req.body.search;
    // User the connection
    connection.query('SELECT * FROM user WHERE first_name LIKE ? OR last_name LIKE ?', ['%' + searchTerm + '%', '%' + searchTerm + '%'], (err, rows) => {
        if (!err) {
            res.render('pages/admin', {css: "/css/admin.css", title: 'admin', rows});
        } else {
        console.log(err);
        }
        // console.log('The data from user table: \n', rows);
    });
}

// Add new user
exports.form = (req, res) => {
    res.render('partials/admin/add-user');
}

exports.create = (req, res) => {

    const { first_name, last_name, email, phone, comments } = req.body;
  
    connection.query('INSERT INTO user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ?', [first_name, last_name, email, phone, comments], (err, rows) => {
      if (!err) {
        res.render('partials/admin/add-user', { alert: 'User added successfully.' });
      } else {
        console.log(err);
      }
    //   console.log('The data from user table: \n', rows);
    });
}

// Edit user
// return id
exports.edit = (req, res) => {

    connection.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {
      if (!err) {
        res.render('partials/admin/edit-user', { rows });
      } else {
        console.log(err);
      }
    //   console.log('The data from user table: \n', rows);
    });
}

exports.update = (req, res) => {
    const { first_name, last_name, email, phone, comments } = req.body;
    // User the connection
    connection.query('UPDATE user SET first_name = ?, last_name = ?, email = ?, phone = ?, comments = ? WHERE id = ?', [first_name, last_name, email, phone, comments, req.params.id], (err, rows) => {
  
      if (!err) {
        // User the connection
        connection.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, rows) => {
          // When done with the connection, release it
          
          if (!err) {
            res.render('partials/admin/edit-user', { rows, alert: `${first_name} has been updated.` });  
          } else {
            console.log(err);
          }
          console.log('The data from user table: \n', rows);
        });
      } else {
        console.log(err);
      }
      console.log('The data from user table: \n', rows);
    });
  }