import {getMenus, addMenu, putMenu, deleteMenu} from "../database/menuQuery.js";

export async function getMenusController(req, res) {
    try {
        const menus = await getMenus();
        return res.json(menus);
    } catch (error) {
        console.error("Error Fetching the Menus", error);
        return res.status(500).json({error: "Failed to Fetch Accounts"});
    }
}

export async function deleteMenuController(req, res) {
    try {
        const {id} = req.params;

        if(!id){
            return res.status(400).json({error: "Failed to Locate the account!"});
        }

        const del_Menu = await deleteMenu(id);

        return res.status(200).json({
            message: "Account Successfully Deleted!",
            data: del_Menu,
        });
    } catch (error) {
        console.error("Error Deleting Menu:", error);
        return res.status(500).json({error: "Failed to Delete Account"});
    }
}

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

export async function updateMenuController(req, res) {
    try {
        const {id} = req.params;
        const {sku, item, category, quantity, price, description} = req.body;

        if(!sku || !item || !category || !quantity || !price || !description){
            return res.status(400).json({ error: "Please fillout all fields, they are required." });
        }

        const updateMenu = await putMenu(id, sku, item, category, quantity, price, description);
        return res.status(200).json({
               message: "Menu Successfully Updated!",
               data: updateMenu,});
    } catch (error) {
      console.error("Error Updating  Menu in the Database: ", error);
    return res.status(500).json({error: "Failed to Update Menu"});  
    }
}