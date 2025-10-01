"use client";
import React,{useState, useEffect} from "react";
import { toast } from "react-toastify";
import { fetchUser } from "@/app/components/helperFunctions/fetchSignedInUser";
import { updateSignedInUser } from "@/app/components/helperFunctions/updateSignedInUser";

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
    <div className="flex flex-col border-2 w-full p-3 rounded-xl bg-white shadow-sm">
      {/* Name */}
      <div className="flex items-center mb-4">
        <label htmlFor="name" className="w-40 font-semibold">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Please fill out Name"
          value={user?.name || ""}
          onChange={handleChange}
          className="flex-1 rounded-lg border px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* Email */}
      <div className="flex items-center mb-4">
        <label htmlFor="email" className="w-40 font-semibold">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Please fill out Email"
          value={user?.email || ""}
          onChange={handleChange}
          className="flex-1 rounded-lg border px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* Contact Number */}
      <div className="flex items-center mb-4">
        <label htmlFor="contactNo" className="w-40 font-semibold">
          Contact Number
        </label>
        <input
          type="text"
          id="contactNo"
          name="contactNo"
          placeholder="Contact No. - Please fill this out"
          value={user?.contactNo || ""}
          onChange={handleChange}
          className="flex-1 rounded-lg border px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* Description */}
      <div className="flex items-start mb-6">
        <label htmlFor="description" className="w-40 font-semibold mt-2">
          Description
        </label>
        <textarea
          id="description"
          rows={4}
          name="description"
          placeholder="Please fill out Description"
          value={user?.description || ""}
          onChange={handleChange}
          className="flex-1 rounded-lg border px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* Submit button */}
      <div className="flex justify-end">
        <button
          type="submit"
          onClick={handleUpdate}
          className="text-white bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded font-semibold transition-colors"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
}