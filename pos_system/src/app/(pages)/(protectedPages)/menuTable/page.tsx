"use client";
import React from 'react'
import TableMenus from '@/app/components/ui/menuTable/table'; 
import { ToastContainer, toast } from 'react-toastify';
import { MenuProvider } from './contextMenu'; 
export default function MenuTable(){
    return(
       <MenuProvider>
        <div className='w-full flex flex-col mt-15 items-center justify-center border p-5'>
            <div className='m-5 w-full flex border justify-center'>
                <h1>test</h1>
            </div>
            <div className='flex justify-center'>
                  <TableMenus />
            </div>
        </div>
       </MenuProvider>
    )
}