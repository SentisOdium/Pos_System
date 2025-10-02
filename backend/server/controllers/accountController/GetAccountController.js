import { getAccounts, getAccountTotal } from "../../database/AccountsQueries/GetAccount.js";
export async function getAccountsController(req, res) {
    //convert string to number
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const offset = (page - 1) * limit;
    //gets the data in search, if there is none, it defaults in "" empty string
    const search = req.query.search || "";
    // defaults in column name if no data. same with order
    const column =  req.query.column || "name";
    const order = req.query.order || "ASC";
   try{
          const total = await getAccountTotal(search);
          const accounts = await getAccounts(offset, limit, search, column, order);

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
