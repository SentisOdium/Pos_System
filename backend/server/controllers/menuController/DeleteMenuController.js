import { deleteMenu } from "../../database/menuQueries/DeleteMenu.js";

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