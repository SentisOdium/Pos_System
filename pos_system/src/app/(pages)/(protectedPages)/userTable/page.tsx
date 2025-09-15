"use client";
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Table from '@/app/components/ui/table/table';
import SearchQuery from '@/app/components/ui/searchQuery/searchQuery';
import { UserProvider } from '@/app/(pages)/(protectedPages)/userTable/UserContext';

export default function UserTable(){
 
  return(
    <UserProvider>
      <div className='w-full flex flex-col items-center justify-center border p-5'>
  <div className='m-5 w-full flex justify-center'>
    <SearchQuery />
  </div>
  <div className='flex justify-center'>
    <Table />
  </div>
  <ToastContainer />
</div>

<div className=''>
    <SearchQuery />
  </div>
    </UserProvider>  
  )
}