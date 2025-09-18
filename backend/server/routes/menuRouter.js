import {Router} from "express";
import 
{
    addMenuController, 
    deleteMenuController, 
    getItemMenuController, 
    getMenusController, 
    updateMenuController
} from "../controllers/menuController/menuController.js";

import { authenticateToken } from "../middleware/LoginAuthMiddleware.js";
import { authorizeRoles } from "../middleware/RoleAuthMiddleware.js";

const router = Router();

//no middleware for get
router.get("/menu",
    getMenusController);

router.get("/menu/:id", 
    getItemMenuController)


router.post("/menu",
    authenticateToken,
    authorizeRoles("admin"), 
    addMenuController);
    
router.delete("/menu/:id",
    authenticateToken, 
    authorizeRoles("admin"), 
    deleteMenuController);

router.put("/menu/:id",
    authenticateToken,
    authorizeRoles("admin"), 
    updateMenuController);

export default router;