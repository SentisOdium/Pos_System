import axios from "axios"

export async function DeleteUser(id: string){
    try {
        const res = await axios.delete(`http://localhost:5000/api/accounts/${id}`, {withCredentials: true});
        
        return res.data;
    } catch (err:any) {
        console.error("Error Deleting User: ", err.message);
        return false;
    }
}

export async function DeleteMenu(id: string){
    try {
        const res = await axios.delete(`http://localhost:5000/api/menu/${id}`, {withCredentials: true});
        
        return res.data;
    } catch (err:any) {
        console.error("Error Deleting Item in Menu: ", err.message);
        return false;
    }
}

