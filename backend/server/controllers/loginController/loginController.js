import { getAccountByEmail } from "../../database/loginQuery/getAccountByEmail.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export async function loginController(req, res) {
  try {
    const { email, password } = req.body; 
    const account = await getAccountByEmail(email);

    if (!account) {
      return res.status(404).json({ error: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, account.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    if (!process.env.TOKEN_SECRET) {
      return res.status(500).json({ error: "Server misconfiguration: TOKEN_SECRET missing" });
    }

    const token = jwt.sign(
      { id: account.id, role: account.role },
      process.env.TOKEN_SECRET,
      { expiresIn: "10h" }
    );

    const isProduction = process.env.NODE_ENV === "production";
  
      res.cookie("token", token, {
      httpOnly: true,
      secure: isProduction,
      sameSite: "lax",
      path: "/",   
    });
    console.log("Logging in account:", account); 
    return res.json({ message: "Login Successful" });

  } catch (error) {
    console.error("Login error", error);
    return res.status(500).json({ error: error.message || "Failed to login" });
  }
}
