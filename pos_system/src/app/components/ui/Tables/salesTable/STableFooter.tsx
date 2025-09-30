import React from "react";
import PaginationControls from "../../pagnation/pagination";
import SetRows from "@/app/components/ui/setRows/setRows";
import { FooterProps } from "@/app/components/common/userObject";

export default function TableFooter({page, setPage, totalPages, setLimit}: FooterProps) {
   
  return (
    <tfoot className='border m-2'>
      <tr>
        <td colSpan={8}>
          <div className="flex flex-col items-center justify-center gap-2 p-4">
            <PaginationControls page={page} setPage={setPage} totalPages={totalPages}/>
            <SetRows setPage={setPage} setLimit={setLimit} />  
          </div>
          
        </td>
      </tr>

    </tfoot>
  )
}
