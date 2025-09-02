import { pool } from "../config/db.js";

export async function getMenus(){
    try{
        const [menu] = await pool.query("SELECT * FROM menu")
        return menu
    }catch(err){
        console.error({
            message: "Failed to Fetch Menu", 
            error: err.message
        });
    }
}
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

export async function addMenu(sku, item, category, quantity, price, description){
    try {
        const [newMenu] = await pool.query(
            "INSERT INTO menu (sku, item, category, quantity, price, description) VALUES (?, ?, ?, ?, ?, ?)",
            [sku, item, category, quantity, price, description]
        )
        return newMenu;
    } catch (error) {
        console.error("Failed to Insert Data", error.message);
        throw error;
    }
}

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