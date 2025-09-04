import { getMenus } from "../../database/menuQueries/GetMenu.js";

export async function getMenusController(req, res) {
    try {
        const menus = await getMenus();
        return res.json(menus);
    } catch (error) {
        console.error("Error Fetching the Menus", error);
        return res.status(500).json({error: "Failed to Fetch Accounts"});
    }
}
