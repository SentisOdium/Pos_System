import  {Router} from "express";
import {getAccountsController} from "../controllers/accountsControllers.js";

const router = Router();

router.get("/accounts", getAccountsController);

export default router;