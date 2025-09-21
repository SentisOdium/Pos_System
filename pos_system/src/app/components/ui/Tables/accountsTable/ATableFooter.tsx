"use client";

import React from "react";
import PaginationControls from "../../pagnation/pagination";
import { FooterProps } from "@/app/components/common/userObject";
import SetRows from "../../setRows/setRows";

export default function TableFooter({page, setPage, totalPages, setLimit}: FooterProps) {
   
  return (
    <tfoot className='border m-2 '>
      <tr>
        <td colSpan={7}>
          <PaginationControls page={page} setPage={setPage} totalPages={totalPages}/>
          <SetRows setPage={setPage} setLimit={setLimit} />
        </td>
      </tr>

    </tfoot>
  )
}
