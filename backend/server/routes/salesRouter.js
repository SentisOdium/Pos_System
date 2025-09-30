import { Router } from "express";

//auth middlewares
import { authenticateToken } from "../middleware/LoginAuthMiddleware.js";
import { authorizeRoles } from "../middleware/RoleAuthMiddleware.js";

//controller imports

import * as SalesController from "../controllers/salesController/SalesController.js";

const router = Router();

router.get("/sales", 
    
    SalesController.GetSaleController);

router.get("/sales/:orderId", 
   
    SalesController.GetSaleIdController);

router.post("/sales",  
    SalesController.AddSaleController);

router.delete("/sales/:orderId", 
    
    SalesController.DeleteSaleController);

router.put("/sales/:orderId", 
    
    SalesController.UpdateSaleController);

export default router;