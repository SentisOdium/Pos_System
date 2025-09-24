import { pool } from "../../config/db.js";

export async function AddMenu(sku, item, category, quantity, price, description, url){
    try {
    
        const [newMenu] = await pool.query(
            "INSERT INTO menu (sku, item, category, quantity, price, description, url) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [sku, item, category, quantity, price, description, url]
        )
        return newMenu;
    } catch (error) {
        console.error("Failed to Insert Data", error.message);
        throw error;
    } 
}

export async function DeleteMenu(id){
    try {
        const [result] = await pool.query(
            "DELETE FROM menu WHERE id = ?", [id]
        );
        return result;
    } catch (error) {
        console.error({ success: false, message: "Specfied ID cannot be found, failed to delete the Menu." });
        throw error;
    }
}

const allowedColumns = [ "sku", "item", "category", "price", "description"];
const sortOrder = ["ASC", "DESC"];

export async function GetMenus(offset = 0, limit = 5, search = "", column = "sku", order = "DESC"){

    if(!allowedColumns.includes(column)) column = "sku";
    order = order.toUpperCase();
    if(!sortOrder.includes(order)) order = "ASC";

    try{
        const [menu] = await pool.query(`
            SELECT * FROM menu
            WHERE sku LIKE ? OR item LIKE ? OR category LIKE ? OR price LIKE ? OR description LIKE ?
             ORDER BY ${column} ${order}
            LIMIT ? OFFSET ? 
            `, [`%${search}%`,`%${search}%`,`%${search}%`,`%${search}%`,`%${search}%`,  limit, offset] )
        
            return menu
    }catch(err){
        console.error({
            message: "Failed to Fetch Menu", 
            error: err.message
        });
    }
}

export async function getMenuTotal(search = ""){
    try {
        const [rows] = await pool.query(`
            SELECT COUNT(*) as total FROM menu
            WHERE sku LIKE ? OR item LIKE ? OR category LIKE ? OR price LIKE ? OR description LIKE ?
            `, [`%${search}%`,`%${search}%`,`%${search}%`,`%${search}%`,`%${search}%`]);

            return rows [0].total;
    } catch (err) {
        console.error("Failed to fetch Count Menu", err.message);
        return 0;
    }
}

export async function PutMenu(id, sku, item, category, quantity, price, description, url){
    try {
        const [updateMenu] = await pool.query(
            `UPDATE menu
                SET sku = ?, item = ?, category = ?, quantity = ?, price = ?, description = ?, url = ?  
                WHERE id = ?
            `, [sku, item, category, quantity, price, description, url, id]
        );
        return updateMenu
    } catch (err) {
        console.error({ success: false, message: "Failed to Update the specified Account." });
        throw err;
    }
}

export async function getItemMenu(id){
    try {
        const [row] = await pool.query(
            `SELECT * FROM menu WHERE id = ?`,[id]
        )
         console.log("DB Result:", row);
        return row.length > 0 ? row[0] : null; 
    } catch (err) {
        console.error("Failed to Item Menu on the Database:", err.message);
        return null;
    }
}
