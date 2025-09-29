import axios from "axios";

export type userdata= {
  name?: string;
  email?: string;
  contactNo?: string;
  password?: string;
  description?: string;
  role?: string; 
}
export async function updateSignedInUser(id: string, data: userdata ) {
  try {
    const res = await axios.put(
      `http://localhost:5000/api/accounts/${id}`, 
      data, 
      { withCredentials: true}
    );

    
    return res.data;
  } catch (err) {
    console.error("Failed to Update user:", err);
    throw new Error("Failed to Update user");
  }
}
