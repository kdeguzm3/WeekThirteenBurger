const mysql = require('mysql');
const pass = require('../../pass');

//mysql connection
const connection = mysql.createConnection({
    host: "i2cpbxbi4neiupid.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "	v7finmmqedixgjfl",
    password: "t91vw9simatps62j",
    database: "fs1q43ivuzz9ybvm"

});


//exports
module.exports = connection;