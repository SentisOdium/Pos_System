import { pool } from "../../config/db.js";

export async function updateAccounts(id, name, email, contactNo,  description, role ) {
    try{
        const [result] = await pool.query(
            `UPDATE accounts
            SET name = ?, email = ?, contactNo = ?,  description = ?, role = ?
             WHERE id = ?
            `, [ name, email, contactNo, description, role, id]
        )
                return result;
     }catch(err){
        console.error({ success: false, message: "Failed to Update the specified Account." });
        throw err;
     }
}