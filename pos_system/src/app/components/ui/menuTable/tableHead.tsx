import { tblMenuHeaders } from "../../common/userObject";
import { FaCaretUp } from "react-icons/fa";
import { useContext } from "react";
import { TableMenuContext } from "@/app/(pages)/(protectedPages)/menuTable/contextMenu";

export default function TableHead(){
   const data = useContext(TableMenuContext);

   if(!data){
    throw new Error("Table Body must be used within a PageContext.Provider");
   }

   const {sortColumn, sortAsc, setSortColumn, setSortAsc} = data;
   
   function headerClick(column: string){
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
                {tblMenuHeaders.map(({KEY, label, sortable}) => (
                    <th key={KEY} className="border border-gray-300 p-2 w-1/7 break-words text-center items-center"
                    onClick={sortable ? () => headerClick(KEY): undefined}>
                        {label}
                        {sortable && sortColumn === KEY && (
                            <FaCaretUp className={sortAsc ? "" : "rotate-180"}/>
                        )}
                    </th>
                ))}
            </tr>
        </thead>
    )
}