"use client";

import React from 'react'
import UserBtn from '@/app/components/ui/modal/buttons/userBtn';
import { ToastContainer, toast } from 'react-toastify';
import "../../styles/auth.css";
import { useUser } from './userContext';
import { logoutUser } from './logoutUser';

export default function UserPage() {
  const { user } = useUser();

  async function handleLogout() {
    try {
      await logoutUser();
      window.location.href = "/auth/login";
    } catch (err) {
      console.error("Logout failed", err);
      toast.error("Failed to Logout User!");
    }
  }
  return (
    <div className="container userpage-container">
      <div className="profile-card">
        <h2 className="profile-title">User Profile</h2>
        <div className="profile-info">
          <p><strong>Name:</strong> {user?.name || "No User Data"}</p>
          <p><strong>Email:</strong> {user?.email || "No User Data"}</p>
          <p><strong>Contact No.:</strong> {user?.contactNo || "No User Data"}</p>
          <p><strong>Password:</strong> ********</p>
          <p><strong>Description:</strong> {user?.description || "No User Data"}</p>
        </div>
        <UserBtn />
        <button className='bg-red-600 hover:bg-red-700 text-white p-2 w-full m-5 rounded-4xl' onClick={handleLogout}>Logout</button>
      </div>
      <ToastContainer />
    </div>
  )
}
