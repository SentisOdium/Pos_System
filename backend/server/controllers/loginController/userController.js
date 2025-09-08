import jwt from "jsonwebtoken";
import { getSingleAccount } from "../../database/loginQuery/GetIdAccount.js";

export async function userController(req, res) {
  try {
    console.log("Cookies received:", req.cookies);
    console.log("Cookies received in /profilePage:", req.cookies);
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ error: "Unauthorized Access" });

    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log("Decoded JWT:", decoded);

    const user = await getSingleAccount(decoded.id);
    console.log("User from DB:", user);

    if (!user) {
      return res.status(404).json({ error: "User Not Found" });
    }

    const { id, name, email, role, ...rest } = user;
    const safeUser = {
      id: id,
      name: name,
      email: email,
      role: role,
      ...rest
    };
    return res.json({ user: safeUser });

  } catch (error) {
    console.error("User fetch error:", error);
    return res.status(401).json({ error: "Unauthorized" });
  }
}
