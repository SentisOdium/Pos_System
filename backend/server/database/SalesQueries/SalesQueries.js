import { pool } from "../../config/db.js";

export async function AddSale(name, address, orders, deliveryFee, subTotal, total) {
    try {
        const [sale] = await pool.query(
            "INSERT INTO sales (name, address, orders, deliveryFee, subTotal, total) VALUES (?, ?, ?, ?, ?,?)",
            [name, address, orders, deliveryFee, subTotal, total ]
        );

        return sale;
    } catch (error) {
        console.error("Failed to Insert Data", error.message);
        throw error
    }
}

export async function DeleteSale(orderId){
    try {
        const [sale] = await pool.query(
            "DELETE FROM sales WHERE orderId = ?", [orderId]
        );
        return sale
    } catch (error) {
        console.error("Failed to Delete Sales Record", error.message);
        throw error
    }
}

//whiteList columns - so that no value could be used.
const allowedColumns = ["orderId","name", "address", "orders", "deliveryFee", "subTotal", "total", "createAt"];
const sortOrder = ["ASC", "DESC"];

export async function GetSaleRecord(offset = 0, limit = 5, search = "", column = "orderId", order = "DESC", createAt){
    if(!allowedColumns.includes(column)) column = "orderId";
    order = order.toUpperCase();
    if(!sortOrder.includes(order)) order = "ASC";

    let query = `
            SELECT * FROM sales
            WHERE (orderId LIKE ? OR address LIKE ? OR orders LIKE ? OR total LIKE ? OR createAt LIKE ?)`;

    let param = [`%${search}%`,`%${search}%`,`%${search}%`,`%${search}%`,`%${search}%`];

    if(createAt){
        query += " AND DATE(createAt) = DATE(?)";
        param.push(createAt);
    }

    query += ` ORDER BY ${column} ${order} LIMIT ? OFFSET ?`;
    param.push(limit, offset);

    try {
        const [sale] = await pool.query(query, param);
        return sale;
    } catch (error) {
        console.error("Failed to Fetch Data", error.message);
        throw error
    }
}

export async function GetSalesTotal(search = "") {
    try {
         const [sale] = await pool.query(`
            SELECT COUNT(*) as total FROM sales
            WHERE orderId LIKE ? OR address LIKE ? OR orders LIKE ? OR total LIKE ? OR createAt LIKE ?
            `, [`%${search}%`,`%${search}%`,`%${search}%`,`%${search}%`,`%${search}%`]);

            return sale[0].total;
    } catch (error) {
        console.error("Failed to Count Sales Record", error.message);
        return 0;
    }
}

export async function GetSaleSum(){
    try {
        const [total] = await pool.query(
            `
            SELECT 
                SUM(subTotal) AS subTotalSale,
                SUM(subTotal + deliveryFee) AS totalSale
            From sales
            `);

            return {
                subTotalSale: total[0].subTotalSale || 0,
                totalSale: total[0].totalSale || 0
            }
    } catch (error) {
        console.error("Failed to Compute the total ");
        throw error;
    }
}


export async function GetSaleById(orderId){
    try {
        const [sale] = await pool.query(` SELECT * FROM sales WHERE orderId = ?`, [orderId]);
        return sale.length > 0 ? sale[0] : null;

    } catch (error) {
        console.error("Failed to Load Sales Record on the Database: ", error.message);
    }
}

export async function UpdateSales(orderId, name, address, orders, deliveryFee, subTotal, total){
    try{
        const [sale] = await pool.query(
            `UPDATE sales 
                SET name = ?, address = ?, orders = ?, deliveryFee = ?, subTotal = ?, total = ?
                WHERE orderId = ?`,
                [name, address, orders, deliveryFee, subTotal, total, orderId]
        );
        return sale;
    }catch(error){
        console.error("Failed to Update Sales Record", error.message);
        throw error;
    }
}