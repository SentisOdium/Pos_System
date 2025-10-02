import { pool } from "../../config/db.js";

/*whitelist the columns and the sort order this is done 
 we have template literals in the query, 
 this is to prevent injections.
*/
const allowedColumns = ["name", "email", "contactNo", "role"];
const sortOrder = ["ASC", "DESC"];
                                //Pagination  values 
export async function getAccounts(offset = 0, limit = 5, search = "", column = "name", order = "ASC" ){
    try{

        //condition, it checks wether the column and sort order exist, if not it will default to a value.
        if (!allowedColumns.includes(column)) column = "name";
        order = order.toUpperCase();
        if (!sortOrder.includes(order)) order = "ASC";

        //example of template literals:  ${column} ${order}
        const [rows] = await pool.query
            (   `
                SELECT * FROM accounts 
                WHERE name LIKE ? OR email LIKE ? OR contactNo LIKE ? OR role LIKE ?
                ORDER BY ${column} ${order}
                LIMIT ? OFFSET ?`, 
                //template literals + sql wildcards: A wildcard character is used to substitute one or more characters in a string.
                //for this context, matches anything containing the search term in SQL using LIKE
                //tells the database to find anything that contains the word " that matches the db"

                    [`%${search}%`,`%${search}%`,`%${search}%`,`%${search}%`,  limit, offset]
            );
        return rows;
    }catch(err){
        console.error("Failed to fetch Data", err.message);
        return[];
    }
}
//the search is also in the parameter so that when we search, it will count the matching records that match
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


