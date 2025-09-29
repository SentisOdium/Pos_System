import axios from "axios";
import { userdata } from "./updateSignedInUser";

export async function loginUser(userData: any,setUser: (user: userdata | null) => void) {
  try {
    const res = await axios.post("http://localhost:5000/api/login", userData, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    setUser(res.data.user);
    
    return res.data;
  } catch (error: any) {
   console.error("Login failed full error:", error);
  console.error("Error response:", error.response);
  throw new Error(error.response?.data?.error || error.message || "Failed to login user");
  }
}
