import mysql from 'mysql2/promise';
import dotenv from 'dotenv';


dotenv.config();

    const pool = mysql.createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        connectionLimit: 25
    });

    async function getAccounts(){
            const [rows] = await pool.query("SELECT * FROM accounts");
            return rows;      
    }
 const accounts = await getAccounts();
 console.log(accounts);

 export {pool};