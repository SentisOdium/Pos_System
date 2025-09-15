import { tblHeaders } from "../../common/userObject";
import { FaCaretUp } from "react-icons/fa";
import { useState, useContext } from "react";
import { TableUserContext } from '@/app/(pages)/(protectedPages)/userTable/UserContext';
 
export default function TableHead(){
    const data = useContext(TableUserContext);
    
        if (!data) {
          throw new Error("Table Body must be used within a PageContext.Provider");
        }
        
        const {sortColumn, sortAsc, setSortColumn, setSortAsc } = data;

    function headerClick(column: string){
        //console.log("this is header: ", headerId)
        if(sortColumn === column){
            setSortAsc(!sortAsc);
        }else{
            setSortColumn(column);
            setSortAsc(true);
        }
    }

    return(
        <thead>
             <tr className="bg-gray-200 p-2">
                {tblHeaders.map(({KEY, label, sortable}) => (
                            <th key={KEY} className="border border-gray-300 p-2 w-1/7 break-words text-center items-center" onClick={sortable ? () => headerClick(KEY): undefined}>
                                {label}
                                {sortable && sortColumn === KEY && (
                                        <FaCaretUp className={sortAsc ? "" : "rotate-180"} />
                                    )}
                            </th>
                    ))}
             </tr>
        </thead>
    )
}