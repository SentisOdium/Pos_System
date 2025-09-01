import {getAccounts, addAccounts} from "../database/accountsQuery.js";

export async function getAccountsController(req, res) {
   try{
        const accounts = await getAccounts();
        console.log(accounts);
        res.json(accounts);
   }catch(err){
        console.error("Error Fetching Accounts", err);
        res.status(500).json({error: "Failed to Fetch Accounts"});
   }
};

export async function addAccountsController(req, res) {
     try{
          const {name, email, password} = req.body;
          
               if (!name || !email || !password) {
                    return res.status(400).json({ error: "Name, email, and password are required." });
               }

          const accounts = await addAccounts(name, email, password);
          console.log(accounts);
          res.json(accounts);

          res.status(201).json({
               message: "Account Successfully Created!",
               data: accounts,
          })
     }catch(err){
          console.error("Error Inserting Account into the Database: ", err);
          res.status(500).json({error: "Failed to Inserting Accounts"});
     }
}

