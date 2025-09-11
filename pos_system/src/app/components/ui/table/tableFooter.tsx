import React, { useContext } from 'react'
  import { TableUserContext } from '@/app/(pages)/(protectedPages)/userTable/UserContext';
import Link from 'next/link';


export default function TableFooter() {
    
    const data = useContext(TableUserContext);

    if (!data) {
      throw new Error("Table Body must be used within a PageContext.Provider");
    }
    
    const {setPage, page, users, totalPages } = data;
  return (
   <tfoot>
    <tr>
      <td>
        <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        onClick={() => setPage(page - 1)}
        disabled={page <= 1}
      >
        Prev
      </button>

        <ul>
          <li>
            <Link href="#"  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
            1
          </Link>
          </li>
        </ul>
          
    

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
        onClick={() => setPage(page + 1)}
        disabled={page >= totalPages}
      >
        Next
      </button>

      <span className="text-sm">Page {page} of {totalPages}</span>
      </td>
    </tr>
    

   </tfoot>
  )
}
