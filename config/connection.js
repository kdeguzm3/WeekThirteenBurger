const mysql = require('mysql');
const pass = require('../../pass');

//mysql connection

let config = process.env.JAWSDB_URL || {
    host: "localhost",
    port: 3306,
    user: "root",
    password: pass,
    database: "burgers_db"

}
const connection = mysql.createConnection(config);


//exports
module.exports = connection;