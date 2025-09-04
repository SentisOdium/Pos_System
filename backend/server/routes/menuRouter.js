import {Router} from "express";
import { getMenusController } from "../controllers/menuController/GetMenuController";
import { addMenuController } from "../controllers/menuController/AddMenuController";
import { deleteMenuController } from "../controllers/menuController/DeleteMenuController";
import { updateMenuController } from "../controllers/menuController/UpdateMenuController";

const router = Router();

router.get("/menu", getMenusController);
router.post("/menu", addMenuController);
router.delete("/menu/:id", deleteMenuController);
router.put("/menu/:id", updateMenuController);

export default router;