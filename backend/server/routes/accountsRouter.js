import { Router } from "express";

// Controllers
import { getAccountsController } from "../controllers/accountController/GetAccountController.js";
import { getUserController } from "../controllers/accountController/GetUserController.js";
import { addAccountsController } from "../controllers/accountController/AddAccountsController.js";
import { deleteAccountController } from "../controllers/accountController/DeleteAccountsController.js";
import { updateAccountsController } from "../controllers/accountController/UpdateAccountsControllers.js";

import { loginController } from "../controllers/loginController/loginController.js";
import { LogoutController } from "../controllers/loginController/logoutController.js";
import { UserController } from "../controllers/loginController/userController.js";

// Middlewares
import { authenticateToken } from "../middleware/LoginAuthMiddleware.js";
import { authorizeRoles } from "../middleware/RoleAuthMiddleware.js";

const router = Router();

/*
  Accounts (Admin only)
*/
  
router.get(
  "/accounts",
  authenticateToken,
  authorizeRoles("admin", "user"),
  getAccountsController
);

router.get(
  "/accounts/:id",
  authenticateToken,
  authorizeRoles("admin"),
  getUserController
);

/*
 register Account
*/
router.post(
  "/register", 
  addAccountsController
);

router.post(
  "/accounts",
  authenticateToken,
  addAccountsController
);

router.put(
  "/accounts/:id",
  authenticateToken,
  authorizeRoles("admin"),
  updateAccountsController
);

router.delete(
  "/accounts/:id",
  authenticateToken,
  authorizeRoles("admin"),
  deleteAccountController
);

/**
 * Auth
 */
router.post("/login", loginController);
router.post("/logout", LogoutController);

/**
 * User Profile (User & Admin)
 */
router.get(
  "/profile",
  authenticateToken,
  authorizeRoles("user", "admin"),
  UserController
);


export default router;
