  import React, { useContext } from 'react'
  import { userObject } from '../../common/userObject';
  import { TableUserContext } from '@/app/(pages)/(protectedPages)/userTable/UserContext';

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
            <td colSpan={5} className='text-center p-4'> Loading </td>
          </tr>
        )
        : !users || users.length === 0 ?  
        (
          <tr>
            <td colSpan={5} className='text-center p-4'>No User Found</td>
          </tr>
        )
        :
        (
          users.map(user =>(
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.contactNo}</td>
              <td>{user.password}</td>
              <td>{user.description}</td>
              <td>{user.role}</td>   
              <td>
                <button className='bg-yellow-400 hover:bg-yellow-500 px-5 py-1 rounded-4xl m-1 text-white'>Update</button>
                
                <button className='bg-red-600 hover:bg-red-700 px-6 py-1 rounded-4xl m-1 text-white'>Delete</button>
              </td>    
            </tr>
          ))
        )
        }
      </tbody>
    )
  }
