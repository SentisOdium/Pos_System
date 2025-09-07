"use client";
import React,{useState, useEffect} from "react";
import { ToastContainer, toast } from "react-toastify";
import { fetchUser } from "@/app/auth/userPage/fetchSignedInUser";
 
type EditUserPageProps = {
  onClose: () => void;
};

export default function AccountEdit({ onClose }: EditUserPageProps) {
  const [user, setUser] = useState<any>(null);
  
    useEffect(() => {
        async function loadUser() {
          try {
            const data = await fetchUser();
            setUser(data);
          } catch (err) {
            console.error("Fetch user error:", err);
            toast.error("Failed to Load Data");
          }
        }
      loadUser();
    },[]);
  

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
    };

  return (
    <div className="flex flex-col border-2 w-full p-10">
                    <label className="ml-9">Name</label>
                    <input 
                        type="text"
                        name="name" 
                        placeholder="Name"
                        value={user?.name || "Please fill this out"} 
                        onChange={handleChange}
                        className="mb-10 border-1"/>

                    <label className="ml-9">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email"
                        value={user?.email || "Please fill this out" } 
                        onChange={handleChange}
                        className="mb-10 border-1"/>

                    <label className="ml-9">Contact Number</label>
                    <input 
                        type="text" 
                        name="ContactNo" 
                        placeholder="Contact No."
                        onChange={handleChange}
                        value={user?.ContactNo || "Please fill this out"} 
                        className="mb-10 border-1"/>
                    
                    <label className="ml-9">Password</label>
                    <input 
                        type="text"
                        name="password" 
                        placeholder="Password"
                        value={user?.Password || "Change Password isnt available for now"} 
                        onChange={handleChange}
                        className="mb-10 border-1"/>
                    
                    <label className="ml-9">Description</label>
                    <textarea
                        rows={4}
                        name="description"
                        placeholder="Description"
                        value={user?.description || "Please fill this out"}
                        onChange={handleChange}
                        className="mb-10 border-1"
                      />

                    <label className="ml-9">Role</label>
                    <input 
                        type="text"
                        name="role" 
                        placeholder="Role" 
                        value={user?.role || "Please fill this out"} 
                        onChange={handleChange}
                        className="mb-10 border-1"/>

                    <button type="submit" className="text-white bg-yellow-400 hover:bg-amber-300 p-2 rounded-full">
                        Update Profile
                    </button>
    </div>
  );
}
