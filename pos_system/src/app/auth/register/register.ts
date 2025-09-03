import axios from "axios";

export async function registerUser(userData: any) {
  try {
    const res = await axios.post("http://localhost:5000/api/accounts", userData, {
      headers: { "Content-Type": "application/json" },
    });
    return res.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.error || "Failed to Register User");
  }
}
