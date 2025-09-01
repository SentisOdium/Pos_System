import  {Router} from "express";
import {getAccountsController, 
        addAccountsController,
        deleteAccountController,
        updateAccountsController} from "../controllers/accountsControllers.js";

const router = Router();

router.get("/accounts", getAccountsController);
router.post("/accounts", addAccountsController);
router.delete("/accounts/:id", deleteAccountController);
router.put("/accounts/:id", updateAccountsController);
export default router;