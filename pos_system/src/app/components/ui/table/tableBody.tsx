  import React, { useContext } from 'react'
  import { TableUserContext } from '@/app/(pages)/(protectedPages)/userTable/UserContext';
  import {DeleteBtn, UpdateBtn} from '../modal/buttons/tableBtn';
  export default function TableBody() {
    const data = useContext(TableUserContext);

    
    if (!data) {
      throw new Error("Table Body must be used within a PageContext.Provider");
    }
    
    const {users, loading} = data;

   
    return (
      <tbody>
        {loading? 
        (
          <tr>
            <td colSpan={7} className='text-center p-4'> Loading </td>
          </tr>
        )
        : !users || users.length === 0 ?  
        (
          <tr>
            <td colSpan={7} className='text-center p-4'>No User Found</td>
          </tr>
        )
        :
        (
          users.map(user =>(
            <tr key={user.id}>
              <td className='p-4'>{user.name}</td>
              <td className='p-4'>{user.email}</td>
              <td className='p-4'>{user.contactNo}</td>
              <td className='p-4'>{user.password}</td>
              <td className='p-4'>{user.description}</td>
              <td className='p-4'>{user.role}</td>   
              <td className='p-4 flex'>
               <UpdateBtn id={user.id}/>
               <DeleteBtn id={user.id}/>
              </td>    
            </tr>
          ))
        )
        }
      </tbody>
    )
  }
