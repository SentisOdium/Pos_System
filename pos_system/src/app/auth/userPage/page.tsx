"use client";

import React,{ Fragment, useEffect, useState } from 'react'
import UserBtn from '@/app/components/ui/modal/buttons/userBtn';
import { ToastContainer, toast } from 'react-toastify';
import "../../styles/auth.css";
import { fetchUser } from './fetchSignedInUser';

export default function UserPage() {
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

  return (

    <Fragment>
      <div className="container">
        <div className="profile-container">
          <label>Name: {user?.name}</label><br />
          <label>Email: {user?.email}</label><br />
          <label>Contact No.: {user?.ContactNo || "N/A"}</label><br />
          <label>Password: (hidden)</label><br />
          <label>Description: {user?.Description || "N/A"}</label><br />
          <label>Role: {user?.role}</label><br /> <br />
          <UserBtn />
        </div>

        
        <ToastContainer />

      </div>
    </Fragment>
  )
}
