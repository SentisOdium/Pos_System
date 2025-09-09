import {Router} from "express";

import { getAccountsController } from "../controllers/accountController/GetAccountController.js";
import { getUserController } from "../controllers/accountController/GetUserController.js";
import { addAccountsController } from "../controllers/accountController/AddAccountsController.js";
import { deleteAccountController } from "../controllers/accountController/DeleteAccountsController.js";
import { updateAccountsController } from "../controllers/accountController/UpdateAccountsControllers.js";

//middlewares or auth
import { authenticateToken } from "../middleware/LoginAuthMiddleware.js";
import { authorizeRoles } from "../middleware/RoleAuthMiddleware.js";

//login and logout
import { LogoutController } from "../controllers/loginController/logoutController.js";
import { loginController } from "../controllers/loginController/loginController.js";
import {userController} from "../controllers/loginController/userController.js";

const router = Router();

router.get("/accounts", getAccountsController);
router.get("/accounts/:id", getUserController);
router.post("/accounts", addAccountsController);
router.delete("/accounts/:id", deleteAccountController);
router.put("/accounts/:id", updateAccountsController);

router.post("/login", loginController);
router.post('/logout', LogoutController)
router.get("/profilePage",authenticateToken, authorizeRoles("user",  "admin"),userController);
export default router;