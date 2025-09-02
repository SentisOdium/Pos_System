import  {Router} from "express";
import {getMenusController, addMenuController, deleteMenuController, updateMenuController} from "../controllers/menuControllers.js";
const router = Router();

router.get("/menu", getMenusController);
router.post("/menu", addMenuController);
router.delete("/menu/:id", deleteMenuController);
router.put("/menu/:id", updateMenuController);

export default router;