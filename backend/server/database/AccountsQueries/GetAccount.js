import { pool } from "../../config/db.js";

export async function getAccounts(offset = 0, limit = 5, search = ""){
    try{
        const [rows] = await pool.query(`
            SELECT * FROM accounts 
            WHERE name LIKE ? or email LIKE ? or contactNo LIKE ?
            LIMIT ? OFFSET ?`, 
                [`%${search}%`,`%${search}%`,`%${search}%`,  limit, offset]
            );
        return rows;
    }catch(err){
        console.error("Failed to fetch Data", err.message);
    }
}

export async function getAccountTotal(search = "") {
    try {
        const [rows] = await pool.query(`
            SELECT COUNT(*) as total FROM accounts
            WHERE name LIKE ? or email LIKE ? or contactNo LIKE ?`,
                [`%${search}%`,`%${search}%`,`%${search}%`]
        );
        return rows[0].total;
    } catch (err) {
        console.error("Failed to fetch Count User", err.message);
    }
}