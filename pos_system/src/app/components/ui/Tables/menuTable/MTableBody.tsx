import React from 'react'
import { menuObject } from '../../../common/userObject'
import { DeleteBtn, UpdateBtn } from '../../modal/buttons/MenuTableBtn'
type TableBodyProps = {
  menu: menuObject[];
  loading: boolean;
  fetchData: () => void;
}
export default function TableBody({menu, loading, fetchData}: TableBodyProps) {
    
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
          menu.map(item =>(
            <tr key={item.id}>
              <td className='p-4'>{item.sku}</td>
              <td className='p-4'>{item.item}</td>
              <td className='p-4'>{item.category}</td>
              <td className='p-4'>{item.quantity}</td>
              <td className='p-4'>{item.price}</td>
              <td className='p-4'>{item.description}</td>
              <td className='p-4 flex'>
                <UpdateBtn id={item.id} fetchData={fetchData}/>
                <DeleteBtn id={item.id} fetchData={fetchData}/>
              </td>
            </tr>
          ))
        )
      }
    </tbody>
  )
}
