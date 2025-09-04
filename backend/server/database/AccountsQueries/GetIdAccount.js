import { pool } from "../../config/db.js";

export async function getSingleAccount(id){
    try{
        const [UserRow] = await pool.query("SELECT * FROM accounts where id = ?",[id] )
        return UserRow
    }catch(err){
        console.error("Failed to fetch User", err.message);
    }
}
