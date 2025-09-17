import { AddMenu } from "../../database/menuQueries/MenuQueries.js";
export async function addMenuController(req, res){
    try {
        const {sku, item, category, quantity, price, description} = req.body;

       if (!sku || !item || !category || quantity == null || price == null || !description) {
      return res.status(400).json({ error: "All fields are required" });
    }
        const addNewMenu = await AddMenu(sku, item, category, quantity, price, description);
        return res.status(201).json({
            message: "Menu Successfully Added!",
            data: addNewMenu,
        })
    } catch (error) {
        console.error("Error Inserting Menu into the Database: ", error);
        return res.status(500).json({error: "Failed to Insert New Menu!"});
    }
}