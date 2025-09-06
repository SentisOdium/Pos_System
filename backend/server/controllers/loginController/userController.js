import jwt from "jsonwebtoken";
import { getSingleAccount } from "../../database/AccountsQueries/getIdAccount.js";

export async function userController(req, res) {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ error: "Unauthorized Access" });

    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log("Decoded JWT:", decoded); // should now include id

    const user = await getSingleAccount(decoded.id);
    console.log("User from DB:", user); // should now return your account row

    if (!user || user.length === 0) {
      return res.status(404).json({ error: "User Not Found" });
    }

    const { Password, ...safeUser } = user[0]; // remove sensitive info
    return res.json({ user: safeUser });

  } catch (error) {
    console.error("User fetch error:", error);
    return res.status(401).json({ error: "Unauthorized" });
  }
}
