import axios from "axios";

export async function fetchUser() {
    try {
        const res = await axios.get("http://localhost:5000/api/profilePage", {
            withCredentials: true,
            });
            return res.data.user
        } catch (err) {
            console.error("Fetch user error:", err);
            throw new Error("Failed to load user data");
    }
}