import { getAccounts, getAccountTotal } from "../../database/AccountsQueries/GetAccount.js";
import { sortAccountsBy } from "../../database/AccountsQueries/sortAccounts.js";
export async function getAccountsController(req, res) {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const offset = (page - 1) * limit;
    const search = req.query.search || "";

   try{
          const total = await getAccountTotal(search);
          const accounts = await getAccounts(offset, limit, search);

        return res.json({
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit),
          users: accounts,
     });
   }catch(err){
        console.error("Error Fetching Accounts", err);
        return res.status(500).json({error: "Failed to Fetch Accounts"});
   }
};
