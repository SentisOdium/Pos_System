import { pool } from "../../config/db.js";

export async function addAccounts(name, email, password, role){
    try{
        const [result] = await pool.query(
            "INSERT INTO accounts (name, email, password, role) VALUES (?, ?, ?, ?)",
        [name, email, password, role]
    );
        console.log("Successfully Inserted into the Database!");
        return result;
    }catch(err){
        console.error("Failed to Insert Data", err.message);
        throw err;
    }
}