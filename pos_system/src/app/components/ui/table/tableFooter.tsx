import React, { useContext } from 'react'
import { TableUserContext } from '@/app/(pages)/(protectedPages)/userTable/UserContext';
import SetRows from '../setRows/setRows';
export default function TableFooter() {
    
    const data = useContext(TableUserContext);

    if (!data) {
      throw new Error("Table Head must be used within a PageContext.Provider");
    }

    
    const {setPage, page, totalPages } = data;
  return (
   <tfoot className='border m-2 '>
    <tr >
      <td  colSpan={7}>
        
          <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded mr-2"
          onClick={() => setPage(page - 1)}
          disabled={page <= 1}>
            Prev
        </button>

        
      {Array.from({length: totalPages}, (_, index) =>(
        <button key={index} onClick={() => setPage(index + 1)}
          className={`px-3 py-1 rounded mr-1 ${
          page === index + 1
          ? "bg-blue-600 text-white font-bold"
          : "bg-gray-200 hover:bg-gray-300"}`}>
            {index + 1}
        </button>
      ))}

      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded m-2"
        onClick={() => setPage(page + 1)}
        disabled={page >= totalPages}>
          Next
      </button>

      <span className="text-sm mr-2">Page {page} of {totalPages}</span>

      <span><SetRows/></span>
       
      </td>
    </tr>
    

   </tfoot>
  )
}
