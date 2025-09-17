import { DeleteMenu } from "../../database/menuQueries/MenuQueries.js";
export async function deleteMenuController(req, res) {
    try {
        const {id} = req.params;

        if(!id){
            return res.status(400).json({error: "Failed to Locate the Menu!"});
        }

        const del_Menu = await DeleteMenu(id);

        return res.status(200).json({
            message: "Account Successfully Deleted!",
            data: del_Menu,
        });
    } catch (error) {
        console.error("Error Deleting Menu:", error);
        return res.status(500).json({error: "Failed to Delete Account"});
    }
}