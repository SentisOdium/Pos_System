"use client";
import React,{useState, useEffect} from "react";
import { ToastContainer, toast } from "react-toastify";
import { fetchUser } from "@/app/auth/userPage/fetchSignedInUser";
import { updateSignedInUser } from "@/app/auth/userPage/updateSignedInUser";

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

    const handleUpdate =  async () => {
      if(!user) return;

      try {
        const updatedUser = await updateSignedInUser(user.id, {
          name: user.name,
          email: user.email,
          contactNo: user.contactNo,
          description: user.description,
          role: user.role,
        });

        const refreshedUser = await fetchUser();
        setUser(refreshedUser);
        toast.success("Profile Updated Successfully!");
        onClose();
        
      } catch (err) {
        console.error("Update error:", err);
        toast.error("Failed to update profile");
      }
    }

  return (
    <div className="flex flex-col border-2 w-full p-10">
                    <label className="ml-9">Name</label>
                    <input 
                        type="text"
                        name="name" 
                        placeholder=" Please fill out Name"
                        value={user?.name || ""} 
                        onChange={handleChange}
                        className="mb-10 border-1"/>

                    <label className="ml-9">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Please fill out Email"
                        value={user?.email || "" } 
                        onChange={handleChange}
                        className="mb-10 border-1"/>

                    <label className="ml-9">Contact Number</label>
                    <input 
                        type="text" 
                        name="contactNo" 
                        placeholder="Contact No. - Please fill this out"
                        onChange={handleChange}
                        value={user?.contactNo || ""} 
                        className="mb-10 border-1"/>
                  
                    <label className="ml-9">Description</label>
                    <textarea
                      rows={4}
                      name="description"
                      placeholder="Please fill out Description"
                      value={user?.description || ""}
                      onChange={handleChange}
                      className="mb-10 border-1"
                    />


                    <label className="ml-9">Role</label>
                    <input 
                        type="text"
                        name="role" 
                        placeholder="Please fill out Role" 
                        value={user?.role || ""} 
                        onChange={handleChange}
                        className={`mb-10 border-1 `}/>

                    <button type="submit" onClick={handleUpdate} className="text-white bg-yellow-400 hover:bg-amber-300 p-2 rounded-full">
                        Update Profile
                    </button>
    </div>
  );
}
