import { pool } from "../config/db.js";

  
export async function getAccounts(){
    try{
        const [rows] = await pool.query("SELECT * FROM accounts")
        return rows
    }catch(err){
        console.error("Failed to fetch Data", err.message);
    }
}

export async function addAccounts(name, email, password, role){
    try{
        const [result] = await pool.query(
            "INSERT INTO accounts (Name, Email, Password, Role) VALUES (?, ?, ?, ?)",
        [name, email, password, role]
    );
        console.log("Successfully Inserted into the Database!");
        return result;
    }catch(err){
        console.error("Failed to Insert Data", err.message);
        throw err;
    }
}

export async function deleteAccounts(id) {
    try{
        const [result] = await pool.query(
            "DELETE FROM accounts  WHERE id = ?;", [id]
        )
        console.log("Successfully Deleted the Account!");
        return result;
    }catch(err){
        console.error({ success: false, message: "No account found to delete." });
        throw err;
    }
}
  export async function updateAccounts(id, name, email, contactNo, password, description, role ) {
    try{
        const [result] = await pool.query(
            `UPDATE accounts
            SET name = ?, email = ?, contactNo = ?, password = ?, description = ?, role = ?
             WHERE id = ?
            `, [ name, email, contactNo, password, description, role, id]
        )
        console.log("Successfully Updated the Account!");
        return result;
     }catch(err){
        console.error({ success: false, message: "Failed to Update the specified Account." });
        throw err;
     }
  }