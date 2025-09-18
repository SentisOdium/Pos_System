import React, { useContext } from 'react'
import { TableMenuContext } from '@/app/(pages)/(protectedPages)/menuTable/contextMenu'

export default function TableBody() {
    const data = useContext(TableMenuContext);

    if(!data){
      throw new Error("Table Body must be used within a Provider tag");
    }

    const {menu, loading} = data; 
  return (
    <tbody>
      {loading? 
        (
          <tr>
            <td colSpan={7} className='text-center p-4'> Loading </td>
          </tr>
        )
        : !menu || menu.length === 0 ?
        (
          <tr>
            <td colSpan={7} className='text-center p-4'>No User Found</td>
          </tr>
        )
        :
        (
          menu.map(menu =>(
            <tr key={menu.id}>
              <td className='p-4'>{menu.sku}</td>
              <td className='p-4'>{menu.item}</td>
              <td className='p-4'>{menu.category}</td>
              <td className='p-4'>{menu.quantity}</td>
              <td className='p-4'>{menu.price}</td>
              <td className='p-4'>{menu.description}</td>
              <td className='p-4 flex'>
                
              </td>
            </tr>
          ))
        )
      }
    </tbody>
  )
}
