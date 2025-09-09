import axios from "axios";

export async function fetchUser() {
    try {
        const res = await axios.get("http://localhost:5000/api/profilePage", {
            withCredentials: true,
            });
            return res.data.user;
        } catch (err: any) {
           if(axios.isAxiosError(err) && err.response?.status === 401){
            return null;
           }
        console.error("Unexpected Error,", err);
        throw err;
    }
}