const db = require('./mysqlConnector');                 //db connection module

module.exports = async(statement, fields) => {
    return new Promise((resolve, reject) => {
        db.query(statement, fields, (error, rows) => {
            if (error) reject(error);
            else resolve(rows);
        });
    });
}