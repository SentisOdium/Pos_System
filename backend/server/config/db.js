const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    connectionLimit: 25
});

async function getAccount() {
    const [rows] = await connection.query("SELECT * FROM accounts");
    return rows;
}

(async () => {
    const accounts = await getAccount();
    console.log(accounts);
})();

module.exports = connection;
