import { pool } from "../config/db.js";


export async function deleteMenu(id){
    try {
        const [menuID] = await pool.query(
            "DELETE FROM menu WHERE id = ?", [id]
        );
        return menuID;
    } catch (error) {
        console.error({ success: false, message: "Specfied ID cannot be found, failed to delete the Menu." });
        throw error;
    }
}



