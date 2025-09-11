"use client";
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Table from '@/app/components/ui/table/table';
import { UserProvider } from '@/app/(pages)/(protectedPages)/userTable/UserContext';
export default function UserTable(){
 
    return(
     
       <UserProvider>
        <div className='mt-20 flex'>
            
            <div className='flex items-center justify-center'>
              <Table/>  
            </div>
            
            <ToastContainer/>
        </div>
       </UserProvider>
        
      
    )
}