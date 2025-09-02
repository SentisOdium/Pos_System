import {getAccounts, 
          addAccounts, 
          deleteAccounts,
          updateAccounts} from "../database/accountsQuery.js";

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

export async function addAccountsController(req, res) {
     try{
          const {Name, Email, Password, Role} = req.body;
          
               if (!Name || !Email || !Password) {
                    return res.status(400).json({ error: "Name, email, and password are required." });
               }

               const userRole = Role || "user";

          const accounts = await addAccounts(Name, Email, Password, userRole);

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

          const accounts = await updateAccounts(id, name, email, contactNo, password, description, role);
          console.log(accounts);

          return res.status(200).json({
               message: "Account Successfully Updated!",
               data: accounts,
          })
     }catch(err){
               console.error("Error Updateing  Account in the Database: ", err);
               return res.status(500).json({error: "Failed to Update Accounts"});
          }
}