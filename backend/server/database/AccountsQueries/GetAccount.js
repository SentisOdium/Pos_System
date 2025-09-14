import { pool } from "../../config/db.js";


const allowedColumns = ["name", "email", "contactNo", "role"];
const sortOrder = ["ASC", "DESC"];

export async function getAccounts(offset = 0, limit = 5, search = "", column = "name", order = "ASC" ){
    try{

        if (!allowedColumns.includes(column)) column = "name";
        order = order.toUpperCase();
        if (!sortOrder.includes(order)) order = "ASC";

        const [rows] = await pool.query
            (   `
                SELECT * FROM accounts 
                WHERE name LIKE ? OR email LIKE ? OR contactNo LIKE ? OR role LIKE ?
                ORDER BY ${column} ${order}
                LIMIT ? OFFSET ?`, 
                    [`%${search}%`,`%${search}%`,`%${search}%`,`%${search}%`,  limit, offset]
            );
        return rows;
    }catch(err){
        console.error("Failed to fetch Data", err.message);
        return[];
    }
}

export async function getAccountTotal(search = "") {
    try {
        const [rows] = await pool.query(`
            SELECT COUNT(*) as total FROM accounts
            WHERE name LIKE ? or email LIKE ? or contactNo LIKE ? or role LIKE ?`,
                [`%${search}%`,`%${search}%`,`%${search}%`,`%${search}%`]
        );
        return rows[0].total;
    } catch (err) {
        console.error("Failed to fetch Count User", err.message);
        return 0;
    }
}


