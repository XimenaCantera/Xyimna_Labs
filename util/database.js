const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'mastershoes',
    password: ''
});

module.exports = pool.promise();