import React from 'react'
import { userObject } from '@/app/components/common/userObject';
import { TableBodyProps } from '@/app/components/common/userObject';
import { DeleteBtn, UpdateBtn } from '../../buttons/TableBtn';

type AccountsBodyProps = TableBodyProps & {
  accounts: userObject[];
}

export default function TableBody({accounts, loading, fetchData}: AccountsBodyProps) {
  return (
    <tbody>
      {loading? 
      (
        <tr>
          <td colSpan={7} className='text-center p-4'> Loading </td>
        </tr>
      )
      : !accounts || accounts.length === 0 ?  
      (
        <tr>
          <td colSpan={7} className='text-center p-4'>No User Found</td>
        </tr>
      )
      :
      (
        accounts.map(user =>(
          <tr key={user.id}>
            <td className='p-4'>{user.name}</td>
            <td className='p-4'>{user.email}</td>
            <td className='p-4'>{user.contactNo}</td>
            <td className='p-4'>{user.description}</td>
            <td className='p-4'>{user.role}</td>   
            <td className='p-4 flex'>
              <UpdateBtn id={user.id} fetchData={fetchData} mode="account"/>
              <DeleteBtn id={user.id} fetchData={fetchData} mode="account"/>
            </td>    
          </tr>
        ))
      )
      }
    </tbody>
  )
}
