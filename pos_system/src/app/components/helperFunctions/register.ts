import axios from "axios";
import { User } from "@/app/components/common/userObject";

export async function registerUser(userData: User ) {
  try {
    const res = await axios.post("http://localhost:5000/api/register", userData, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || "Failed to Register User");
  }
}
