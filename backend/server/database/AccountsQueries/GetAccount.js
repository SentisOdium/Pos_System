import { pool } from "../config/db.js";

export async function getAccounts(){
    try{
        const [rows] = await pool.query("SELECT * FROM accounts")
        return rows
    }catch(err){
        console.error("Failed to fetch Data", err.message);
    }
}
