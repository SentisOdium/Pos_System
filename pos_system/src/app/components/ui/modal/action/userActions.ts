import axios from "axios"
import { userObject } from "@/app/components/common/userObject";
import { Id } from "react-toastify";

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
export async function AddUser(userData: Omit<userObject, "id">){
    try {
        const res = await axios.post(`http://localhost:5000/api/accounts`, userData, {withCredentials: true});
        return res.status === 201;
    } catch (err: any) {
        console.error("Error Adding User:", err.message);
        return false;
    }
}
export async function UpdateUser(){
    try {
        const res = await axios.put(`http://localhost:5000/api/accounts`, {withCredentials: true});

    } catch (err: any) {
        
    }
}