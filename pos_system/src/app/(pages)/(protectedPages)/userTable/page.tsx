"use client";
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Table from '@/app/components/ui/table/table';
import SearchQuery from '@/app/components/ui/searchQuery/searchQuery';
import { UserProvider } from '@/app/(pages)/(protectedPages)/userTable/UserContext';
import { AddUser } from '@/app/components/ui/modal/buttons/tableBtn';
export default function UserTable(){

  return(
  <UserProvider>
  <div className='w-full flex flex-col mt-15 items-center justify-center border p-5'>
    <div className='m-5 w-full flex border justify-center'>
      <SearchQuery />
      <AddUser />
    </div>

    <div className='flex justify-center'>
      <Table />
    </div>
    
    <ToastContainer />
  </div>

  </UserProvider>  
  )
}