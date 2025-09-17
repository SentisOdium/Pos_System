import { GetMenus } from "../../database/menuQueries/MenuQueries.js";

export async function getMenusController(req, res) {
    try {
        const menus = await GetMenus();
        return res.json(menus);
    } catch (error) {
        console.error("Error Fetching the Menus", error);
        return res.status(500).json({error: "Failed to Fetch Accounts"});
    }
}
