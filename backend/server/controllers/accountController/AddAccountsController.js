import { addAccounts } from "../../database/AccountsQueries/AddAccounts.js";
import bcrypt from "bcrypt";

export async function addAccountsController(req, res) {
     try{
          const {name, email, password, role} = req.body;
          
               if (!name || !email || !password) {
                    return res.status(400).json({ error: "Name, email, and password are required." });
               }

               const userRole = role || "user";

          const saltRounds = 10;
          const hashedPassword = await bcrypt.hash(password, saltRounds);
          const accounts = await addAccounts(name, email, hashedPassword, userRole);
          
          //delete accounts.Password;
          console.log(accounts);

          return res.status(201).json({
               message: "Account Successfully Created!",
               data: accounts,
          })
     }catch(err){
          console.error("Error Inserting Account into the Database: ", err);
          return res.status(500).json({error: "Failed to Inserting Accounts"}); //change error code that fits the error
     }
}