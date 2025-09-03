import {getAccounts, addAccounts, deleteAccounts, updateAccounts, getSingleAccount} from "../database/accountsQuery.js";
import bcrypt from "bcrypt";

//fetch ALL accounts
export async function getAccountsController(req, res) {
   try{
        const accounts = await getAccounts();
        console.log(accounts);
        return res.json(accounts);
   }catch(err){
        console.error("Error Fetching Accounts", err);
        return res.status(500).json({error: "Failed to Fetch Accounts"});
   }
};

//fetch SINGLE account
export async function getUserController(req, res) {
     
     try {
          const { id } = req.params;
          const singleAccount = await getSingleAccount(id);
          
          if (!singleAccount || singleAccount.length === 0) {
            return res.status(404).json({ error: "User not found" });
          }

          
          return res.json(singleAccount);
     } catch (error) {
          console.error("Error Fetching User", error);
          return res.status(500).json({error: "Failed to Fetch User"});
     }
}

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

export async function deleteAccountController(req, res){
     try{
          const {id} = req.params;

          if (!id){
               return res.status(400).json({error: "Failed to Locate the account!"});
          }
          const accounts = await deleteAccounts(id);
          console.log(accounts);
          

          return res.status(200).json({
               message: "Account Successfully Deleted!",
               data: accounts,
          });

     }catch(err){
          console.error("Error Deleting Account:", err);
          return res.status(500).json({error: "Failed to Delete Account"}); //change error code that fits the error
     }
}

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

/*
NOTES: 

partition these controllers into a folder /accounts -> seprate files, keep the function names as is.

*/