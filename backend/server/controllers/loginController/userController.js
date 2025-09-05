import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import { getSingleAccount } from "../../database/AccountsQueries/getIdAccount.js";
export async function userController(req, res) {
  try {
    // 1. Read cookie from req.cookies
    const token = req.cookies.token;
    if(!token) return res.status(401).json({
        error: "Unauthorized Access"
    });
    // 2. Verify JWT
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
     const user = await getSingleAccount(decoded.id);
    if (!user || user.length === 0) {
      return res.status(404).json({ error: "User Not Found" });
    }

    // 4. Send back user info (not password!)
    const { Password, ...safeUser } = user[0]; // exclude sensitive data
    return res.json({ user: safeUser });
  } catch (error) {
    // Handle errors (e.g., expired token, no token)
    return res.status(401).json({ error: "Unauthorized" });
  }
}
