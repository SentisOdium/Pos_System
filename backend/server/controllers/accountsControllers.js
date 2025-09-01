import {getAccounts} from "../database/accountsQuery.js";

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

