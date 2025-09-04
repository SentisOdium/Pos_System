import { getAccounts } from "../../database/AccountsQueries/getAccount";

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
