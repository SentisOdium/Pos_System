import { PutMenu } from "../../database/menuQueries/MenuQueries.js";
export async function updateMenuController(req, res) {
    try {
        const {id} = req.params;
        const {sku, item, category, quantity, price, description} = req.body;

        if(!sku || !item || !category || !quantity || !price || !description){
            return res.status(400).json({ error: "Please fillout all fields, they are required." });
        }

        const updateMenu = await PutMenu(id, sku, item, category, quantity, price, description);
        return res.status(200).json({
               message: "Menu Successfully Updated!",
               data: updateMenu,});
    } catch (error) {
      console.error("Error Updating  Menu in the Database: ", error);
    return res.status(500).json({error: "Failed to Update Menu"});  
    }
}
