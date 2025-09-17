import { pool } from "../../config/db.js";

export async function getAccountByEmail(email){
    try{
        const [rows] = await pool.query("SELECT * FROM accounts WHERE email  =  ? LIMIT 1 ;",[email] )
        return rows.length > 0 ? rows[0] : null;
    }catch(err){
        console.error("Failed to fetch User", err.message);
        throw err; 
    }
}

export async function getSingleAccount(id) {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM accounts WHERE id = ?",
      [id]
    );

    // Return the first row or null if no user found
    return rows.length > 0 ? rows[0] : null;

  } catch (err) {
    console.error("Failed to fetch User:", err.message);
    return null;
  }
}
