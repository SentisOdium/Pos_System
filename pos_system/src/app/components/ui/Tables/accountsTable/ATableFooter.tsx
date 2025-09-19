"use client";

import React,{useContext} from "react";

type TableFooterProps = {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}
export default function TableFooter({page, setPage, totalPages}:TableFooterProps) {
   
  return (
    <tfoot className='border m-2'>
      <tr>
        <td colSpan={7}>
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

          <div className='flex items-end-safe justify-end-safe'>
            <span className="text-sm mr-2">Page {page} of {totalPages}</span>
          </div>
        </td>
      </tr>

    </tfoot>
  )
}
