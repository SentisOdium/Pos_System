"use client";

import React, { useEffect } from 'react'
import UserBtn from '@/app/components/ui/buttons/userBtn';
import { ToastContainer, toast } from 'react-toastify';
import "../../styles/auth.css";
import { useUser } from '../../components/contexts/userContext';
import { logoutUser } from '../../components/helperFunctions/logoutUser';
import { useRouter } from "next/navigation";
import { useSignedIn } from '@/app/components/hooks/authHooks';
export default function UserPage() {
    
      useSignedIn();    
  
  const { user, setUser } = useUser();
  const router = useRouter();

  async function handleLogout() {
    try {
      await logoutUser();      
      setUser(null);
      router.replace("/auth/login");
    } catch (err) {
      console.error("Logout failed", err);
      toast.error("Failed to Logout User!");
    }
  }
  return (
   <div className="container mx-auto p-6 max-w-md">
      <div className="profile-card bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
        <h2 className="profile-title text-2xl font-semibold text-center mb-4">
          User Profile 
          
        </h2>

        <div className="profile-info flex flex-col gap-2 text-gray-700">
          <p>
            <strong>Name:</strong> {user?.name || "No User Data"}
          </p>
          <p>
            <strong>Email:</strong> {user?.email || "No User Data"}
          </p>
          <p>
            <strong>Contact No.:</strong> {user?.contactNo || "No User Data"}
          </p>
          <p>
            <strong>Description:</strong> {user?.description || "No User Data"}
          </p>

         <div className='place-self-end-safe'> <UserBtn /></div>
        </div>

        {/* Optional user action button */}
        

        {/* Logout Button */}
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg w-full mt-4 transition-colors"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      <ToastContainer />
    </div>

  )
}
