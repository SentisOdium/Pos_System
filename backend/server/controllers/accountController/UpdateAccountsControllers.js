import { updateAccounts } from "../../database/AccountsQueries/UpdateAccount.js";
import bcrypt from "bcrypt";

export async function updateAccountsController(req, res) {
  console.log("Update request body:", req.body, "Params:", req.params);

  try {
    const { id } = req.params;
    const { name, email, contactNo, password, description, role } = req.body;

    if (!id) {
      return res.status(400).json({ error: "Failed to locate the account!" });
    }

    // Basic required fields
    if (!name || !email) {
      return res.status(400).json({ error: "Name and email are required." });
    }

    // Hash password only if it's provided
    let hashedPassword = password;
    if (password) {
      const saltRounds = 10;
      hashedPassword = await bcrypt.hash(password, saltRounds);
    }

    const result = await updateAccounts(
      id,
      name,
      email,
      contactNo,
      hashedPassword,
      description,
      role
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Account not found." });
    }

    return res.status(200).json({
      message: "Account successfully updated!",
      data: result,
    });
  } catch (err) {
    console.error("Error updating account:", err);
    return res.status(500).json({ error: "Failed to update account" });
  }
}
