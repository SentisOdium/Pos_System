import { pool } from "../../config/db.js";

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