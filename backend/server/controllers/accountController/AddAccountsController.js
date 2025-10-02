import { addAccounts } from "../../database/AccountsQueries/AddAccounts.js";
//library for hashing the pssword
import bcrypt from "bcrypt";

export async function addAccountsController(req, res) {
     try{
          const {name, email, password,  role} = req.body;
               //validation if empty
               if (!name || !email || !password) {
                    return res.status(400).json({ error: "Name, email, and password are required." });
               }

               //checks  the request if its in /register, if it is
               const isRegister = req.path === "/register";
               const userDefaultRole = isRegister? "user" : role || "user";

               //mulitplier how many times to apply the hash
               const saltRounds = 10;
               //by crypts hashes the password
               const hashedPassword = await bcrypt.hash(password, saltRounds);
               //does the post request so that it could 
               const accounts = await addAccounts(name, email, hashedPassword, userDefaultRole);

          return res.status(201).json({
               message: "Account Successfully Created!",
               data: accounts,
          })
     }catch(err){
          console.error("Error Inserting Account into the Database: ", err);
          return res.status(500).json({error: "Failed to Inserting Accounts"}); //change error code that fits the error
     }
}