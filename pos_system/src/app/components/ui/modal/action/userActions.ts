import axios from "axios"

export async function DeleteUser(id: string){
    try {
        const res = await axios.delete(`http://localhost:5000/api/accounts/${id}`, {withCredentials: true});
        if(res.status === 204 || res.status === 200){
            return true;
        }else{
            console.error("Failed to Delete User", res.statusText);
            return false;
        }
    } catch (err:any) {
        console.error("Error Deleting User: ", err.message);
        return false;
    }
}
