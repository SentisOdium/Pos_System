import { pool } from "../../config/db.js";

//gets the accound using email
export async function getAccountByEmail(email){
    try{
        const [rows] = await pool.query("SELECT * FROM accounts WHERE email  =  ? LIMIT 1 ;",[email] )
        return rows.length > 0 ? rows[0] : null;
    }catch(err){
        console.error("Failed to fetch User", err.message);
        throw err; 
    }
}

///gets the user account throuh id
export async function getSingleAccount(id) {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM accounts WHERE id = ?",
      [id]
    );

    // Return the first row or null if no user found
    // returns empty array if no user, if there is [{user data  here}]
    return rows.length > 0 ? rows[0] : null;

  } catch (err) {
    console.error("Failed to fetch User:", err.message);
    return null;
  }
}
