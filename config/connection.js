const mysql = require('mysql');
const pass = require('../../pass');

//mysql connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: pass,
    database: "burgers_db"

});


//exports
module.exports = connection;