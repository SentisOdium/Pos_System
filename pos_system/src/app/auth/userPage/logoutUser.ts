import axios from "axios";

export async function logoutUser() {
  try {
    const res = await axios.post(
      "http://localhost:5000/api/logout",
      {}, 
      { withCredentials: true }
    );
    return res.data.message; // { message: "Logout Successful!" }
  } catch (err: any) {
    console.error("Logout failed:", err);
    throw err;
  }
}
