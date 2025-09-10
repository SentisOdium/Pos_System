"use client";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { userObject, tblHeaders } from '@/app/components/common/userObject';

export default function UserTable(){
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState<userObject[]>([]); 
    const [page, setPage] = useState(1);
    const [limit] = useState(5); // fixed for now
    const [totalPages, setTotalPages] = useState(1);

    async function getUsers() {
        setLoading(true);
        
        try {
            const res = await axios.get("http://localhost:5000/api/accounts");
            console.log("API response:", res.data);
            const data =  res.data;
           setUsers(res.data.accounts || []);

        } catch (err) {
            toast.error("Failed to load the data");
            console.error("Error fetching users:", err);
        } finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        getUsers();
    }, [page]);

    return(
        <div className='mt-20 flex items-center justify-center'>
            <table>
                <thead>
                    <tr>
                        {tblHeaders.map(({KEY, label}) => (
                            <th key={KEY} className="border border-gray-400 px-4 py-2">
                                {label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={tblHeaders.length} className="text-center py-4">
                No users found.
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id}>
                {tblHeaders.map(({ KEY }) => (
                  <td key={KEY} className="border border-gray-400 px-4 py-2">
                    {user[KEY as keyof userObject]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
        
            </table>

            <ToastContainer/>
        </div>
    )
}