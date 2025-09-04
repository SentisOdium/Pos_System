import { addMenu } from "../../database/menuQueries/AddMenu";

export async function addMenuController(req, res){
    try {
        const {sku, item, category, quantity, price, description} = req.body;

        if (
            sku === undefined || sku === "" ||
            item === undefined || item === "" ||
            category === undefined || category === "" ||
            quantity === undefined || quantity === "" ||
            price === undefined || price === "" ||
            description === undefined || description === ""
        ) {
            return res.status(400).json({
                error: "All Fields are Required"
            });
        }

        const addNewMenu = await addMenu(sku, item, category, quantity, price, description);
        return res.status(201).json({
            message: "Menu Successfully Added!",
            data: addNewMenu,
        })
    } catch (error) {
        console.error("Error Inserting Menu into the Database: ", error);
        return res.status(500).json({error: "Failed to Insert New Menu!"});
    }
}