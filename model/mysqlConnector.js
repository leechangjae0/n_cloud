const mysql      = require('mysql');

const db = mysql.createConnection({
host     : '15.164.232.201',
port     : '3306',
user     : 'lcj',
password : '1234',
database : process.env.DB_NAME || 'MOVIE',
charset : 'utf8mb4'
});
console.log("called db - connection")

module.exports = db