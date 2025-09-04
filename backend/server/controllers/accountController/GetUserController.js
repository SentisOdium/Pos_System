import { getSingleAccount } from "../../database/AccountsQueries/getIdAccount";

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
