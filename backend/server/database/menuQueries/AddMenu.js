import { pool } from "../config/db.js";

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