"use client";

import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import "../../styles/auth.css";

export default function UserPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
      async function fetchUser() {
        try {
          const res = await axios.get("http://localhost:5000/api/profilePage", {
              withCredentials: true,
          });
          
          console.log("Fetched user data:", res.data);
          setUser(res.data.user);
        } catch (err) {
          console.error("Fetch user error:", err);
          toast.error("Failed to Load Data");
        }
      }
    fetchUser();
  },[]);

  return (
    <div className="container">
      <div className="profile-container">
        <label>Name: {user?.name}</label><br />
        <label>Email: {user?.email}</label><br />
        <label>Contact No.: {user?.ContactNo || "N/A"}</label><br />
        <label>Password: (hidden)</label><br />
        <label>Description: {user?.Description || "N/A"}</label><br />
        <label>Role: {user?.role}</label><br /> <br />
         <button className='bg-blue-600 hover:bg-blue-700 text-white'>Edit Profile</button>
      </div>

      
      <ToastContainer />

    </div>
  )
}
