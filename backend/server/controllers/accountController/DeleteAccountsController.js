import { deleteAccounts } from "../../database/AccountsQueries/DeleteAccount";

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