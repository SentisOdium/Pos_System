  import React, { useContext } from 'react'
  import { userObject } from '../../common/userObject';
  import { TableUserContext } from '@/app/(pages)/(protectedPages)/userTable/UserContext';

  export default function TableBody() {
    const data = useContext(TableUserContext);

    
    if (!data) {
      throw new Error("Table Body must be used within a PageContext.Provider");
    }
    
    const {users, loading} = data;

    console.log("Context data in TableBody:", data);
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
            </tr>
          ))
        )
        }
      </tbody>
    )
  }
