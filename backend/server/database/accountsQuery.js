import { pool } from "../config/db.js";

  
export async function getAccounts(){
    try{
        const [rows] = await pool.query("SELECT * FROM accounts")
        return rows
    }catch(err){
        console.error("Failed to fetch Data", err.message);
    }
}

export async function addAccounts(){
    try{
        const [result] = await pool.query(
            "INSERT INTO accounts (Name, Email, Password) VALUES (?, ?, ?)",
        [name, email, password]
    );
        console.log("Successfully Inserted into the Database!");
        return result;
    }catch(err){
        console.error("Failed to fetch Data", err.message);
        throw err;
    }
}
  