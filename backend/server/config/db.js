const mysql = require('mysql2');
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pointofsale',
    connectionLimit: 25
});

const dbConnection = connection;

dbConnection.on('connection', function(connection){
    console.log('DB Connection Established');

    connection.on('error', function(err){
        console.error(new Date(), 'Mysql Error', err.code);
    });

    connection.on('close', function(err){
        console.error(new Date(), 'Mysql Error', err.code);
    });
});

dbConnection.query('SELECT 1 + 1 AS solution', (err, results) => {
    if (err) {
        console.error("❌ Query Error:", err);
    } else {
        console.log("✅ Query Result:", results[0].solution);
    }
});

module.exports = dbConnection;

