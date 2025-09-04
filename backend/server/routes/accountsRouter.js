import {Router} from "express";
import { getAccountsController } from "../controllers/accountController/GetAccountController";
import { getUserController } from "../controllers/accountController/GetUserController";
import { addAccountsController } from "../controllers/accountController/AddAccountsController";
import { deleteAccountController } from "../controllers/accountController/DeleteAccountsController";
import { updateAccountsController } from "../controllers/accountController/UpdateAccountsControllers";

const router = Router();

router.get("/accounts", getAccountsController);
router.get("/accounts/:id", getUserController);
router.post("/accounts", addAccountsController);
router.delete("/accounts/:id", deleteAccountController);
router.put("/accounts/:id", updateAccountsController);
export default router;