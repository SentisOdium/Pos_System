import { updateAccounts } from "../../database/AccountsQueries/UpdateAccount";
import bcrypt from "bcrypt";

export async function updateAccountsController(req, res){
     try{
          const {id} = req.params;
          const {name, email, contactNo, password, description, role} = req.body;

          if (!id){
               return res.status(400).json({error: "Failed to Locate the account!"});
          }

          if (!name || !email || !password || !contactNo || !description || !role)  {
                    return res.status(400).json({ error: "Please fillout all fields, they are required." });
          }

          let hashedPassword = password; // default to current password

          if(password){
               const saltRounds = 10;
               hashedPassword = await bcrypt.hash(password, saltRounds);
          }
          const accounts = await updateAccounts(id, name, email, contactNo, hashedPassword, description, role);
          console.log(accounts);

          return res.status(200).json({
               message: "Account Successfully Updated!",
               data: accounts,
          })
     }catch(err){
               console.error("Error Updating  Account in the Database: ", err);
               return res.status(500).json({error: "Failed to Update Accounts"});
          }
}