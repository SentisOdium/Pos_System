import { pool } from "../../config/db.js";

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
 