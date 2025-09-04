import {Router} from "express";
import { getMenusController } from "../controllers/menuController/GetMenuController.js";
import { addMenuController } from "../controllers/menuController/AddMenuController.js";
import { deleteMenuController } from "../controllers/menuController/DeleteMenuController.js";
import { updateMenuController } from "../controllers/menuController/UpdateMenuController.js";

const router = Router();

router.get("/menu", getMenusController);
router.post("/menu", addMenuController);
router.delete("/menu/:id", deleteMenuController);
router.put("/menu/:id", updateMenuController);

export default router;