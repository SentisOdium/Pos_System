import 
{ 
    AddMenu, 
    DeleteMenu, 
    GetMenus, 
    getMenuTotal,
    PutMenu, 
    getItemMenu 
} from "../../database/menuQueries/MenuQueries.js";

export async function addMenuController(req, res){
    try {
        const {sku, item, category, quantity, price, description, url} = req.body;

       if (!sku || !item || !category || quantity == null || price == null || !description || !url ) {
        return res.status(400).json({ error: "All fields are required" });
        }

        const addNewMenu = await AddMenu(sku, item, category, quantity, price, description, url);
        return res.status(201).json({
            message: "Menu Successfully Added!",
            data: addNewMenu,
        })
    } catch (error) {
        console.error("Error Inserting Menu into the Database: ", error);
        return res.status(500).json({error: "Failed to Insert New Menu!"});
    }
}

export async function deleteMenuController(req, res) {
    try {
        const id = parseInt(req.params.id, 10);         

        if(isNaN(id)){
            return res.status(400).json({error: "Failed to Locate the Menu!"});
        }

        const result = await DeleteMenu(id);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Menu item not found" });
        }

        return res.status(200).json({
            message: "Item in Menu Successfully Deleted!",
            data: result,
        });
    } catch (error) {
        console.error("Error Deleting Item in Menu:", error);
        return res.status(500).json({error: "Failed to Delete Item in Menu"});
    }
}

export async function getMenusController(req, res) {
    
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const offset = (page - 1) * limit;
    const search = req.query.search || "";
    const column = req.query.column || "sku";
    const order = req.query.order || "ASC";

    try {
        const menus = await GetMenus(offset, limit, search, column, order);
        const total = await getMenuTotal(search);

        return res.json({
            page,
            limit,
            total,
            totalPages: Math.ceil(total/limit),
            menu: menus
        });
    } catch (error) {
        console.error("Error Fetching the Menus", error);
        return res.status(500).json({error: "Failed to Fetch Accounts"});
    }
}

export async function getItemMenuController(req, res){
    try {
        const {id} = req.params;
        console.log("Requested ID:", id); 
        const menu = await getItemMenu(id);
          console.log("DB returned:", menu);
        if(!menu){
            return res.status(404).json({error: "Menu not found"});
        }

        return res.json(menu);
    } catch (err) {
        console.error("Error Fetching the Item Menu", err);
        return res.status(500).json({err: "Failed to Fetch Item Menu"});
    }
}

export async function updateMenuController(req, res) {
    try {
        const {id} = req.params;
        const {sku, item, category, quantity, price, description, url} = req.body;

        if(!sku || !item || !category || !quantity || !price || !description || !url ){
            return res.status(400).json({ error: "Please fillout all fields, they are required." });
        }

        const updateMenu = await PutMenu(id, sku, item, category, quantity, price, description, url);
        return res.status(200).json({
               message: "Menu Successfully Updated!",
               data: updateMenu,});
    } catch (error) {
      console.error("Error Updating  Menu in the Database: ", error);
    return res.status(500).json({error: "Failed to Update Menu"});  
    }
}
