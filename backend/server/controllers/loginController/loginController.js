import { getAccountByEmail } from "../../database/loginQuery/getAccountByEmail.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export async function loginController(req, res) {
  try {
    //get the email and password(hashed)
    const { email, password } = req.body;
     //email is inserted(dunno if its the right term lol, passed?) to the getAccountByEmail, it checks wether that email exist or not
    const account = await getAccountByEmail(email);
    //validation if the email does not exist within the database
    if (!account) {
      return res.status(404).json({ error: "User not found" });
    }

    //gets the password from req.body then compares the plain text password to the hashed password pulled from the getAccountByEmail
    const isMatch = await bcrypt.compare(password, account.password);
    //if the password does not matched to the hashed one, it displays the error
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    //checks if the TOKEN_SECRET 
    if (!process.env.TOKEN_SECRET) {
      return res.status(500).json({ error: "Server misconfiguration: TOKEN_SECRET missing" });
    }
    //creates token and sign it with jwt 
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
    return res.json({ message: "Login Successful" });

  } catch (error) {
    console.error("Login error", error);
    return res.status(500).json({ error: error.message || "Failed to login" });
  }
}
