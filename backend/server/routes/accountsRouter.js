import  {Router} from "express";
import {getAccountsController, addAccountsController} from "../controllers/accountsControllers.js";

const router = Router();

router.get("/accounts", getAccountsController);
router.post("/accounts", addAccountsController);

export default router;