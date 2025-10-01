import { 
    AddSale, 
    DeleteSale, 
    GetSaleRecord, 
    GetSalesTotal, 
    GetSaleById,
    GetSaleSum, 
    UpdateSales 
} from "../../database/SalesQueries/SalesQueries.js";

export async function AddSaleController(req, res){
    try {
        const {name, address, orders, deliveryFee, subTotal, total} = req.body;
        if(!name || !address || !orders || !deliveryFee || !subTotal || !total){
        return res.status(400).json({error: "All fields are Required!"});
        }

        const addSalesRecord = await AddSale(name, address, orders, deliveryFee, subTotal, total);
        return res.status(201).json({
            message: "Sales Record Successfully Added!", 
            data: addSalesRecord
        });
    } catch (error) {
        console.error("Error Inserting Sales Record into the Database!", error);
        return res.status(500).json({error: "Failed to Insert Sales Record!"});
    }
}

export async function DeleteSaleController(req, res){
    try {
        const orderId = parseInt(req.params.orderId, 10);

        if(isNaN(orderId)){
            return res.status(400).json({error: "Failed to Locate the Sales Record!"});
        }

        const result = await DeleteSale(orderId);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Sales Record not found" });
        }

        return res.status(200).json({
            message: "Sales Record Successfully Deleted!",
            data: result
        });
    } catch (error) {
        console.error("Error Deleting Sales Record:", error);
        return res.status(500).json({error: "Failed to Delete Sales Record!"});
    }
}
export async function GetSaleController(req, res){
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const offset = (page - 1) * limit;
    const search = req.query.search || "";
    const column = req.query.column || "orderId";
    const order = req.query.order || "ASC";

    try {
        const record = await GetSaleRecord(offset, limit, search, column, order);
        const total = await GetSalesTotal(search);
        const {subTotalSale, totalSale} = await GetSaleSum();
        return res.json({
            page,
            limit,
            total,
            totalPages: Math.ceil(total/limit),
            sales: record,
            subTotalSale,
            totalSale
        });
    } catch (error) {
        console.error("Error Fetching the Sales Record", error);
        return res.status(500).json({error: "Failed to Fetch Sales Record"});
    }
}

export async function GetSaleIdController(req, res){
    try {
        const {orderId} = req.params;
        const record = await GetSaleById(orderId);

        if(!record){
            return res.status(404).json({error: "Record not found!"});
        }
        return res.json(record);
    } catch (error) {
        console.error("Error Fetching the Record", error);
        return res.status(500).json({error: "Failed to Fetch Item Record"});
    }
}
export async function UpdateSaleController(req, res){
    try {
        const {orderId} = req.params;
        const {name, address, orders, deliveryFee, subTotal, total} = req.body;
        
        if(!name || !address || !orders || !deliveryFee || !subTotal || !total){
        return res.status(400).json({error: "All fields are Required!"});
        }

        const UpdateSaleRecord = await UpdateSales(
            orderId, 
            name, 
            address, 
            orders, 
            deliveryFee, 
            subTotal, 
            total
        );

        return res.status(200).json({
                message: "Sales Record Successfully Updated!",
                data: UpdateSaleRecord});
    } catch (error) {
        console.error("Error Updating Sales Record", error);
        return res.status(500).json({ error: "Failed to Update Sales Record!" });
    }
}