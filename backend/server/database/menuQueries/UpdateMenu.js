import { pool } from "../../config/db.js";

export async function putMenu(id, sku, item, category, quantity, price, description){
    try {
        const [updateMenu] = await pool.query(
            `UPDATE menu
                SET sku = ?, item = ?, category = ?, quantity = ?, price = ?, description = ?
                WHERE id = ?
            `, [sku, item, category, quantity, price, description, id]
        );
        return updateMenu
    } catch (error) {
        console.error({ success: false, message: "Failed to Update the specified Account." });
        throw err;
    }
}