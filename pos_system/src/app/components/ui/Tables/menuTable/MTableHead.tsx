import { tblMenuHeaders } from "../../../common/userObject";
import { FaCaretUp } from "react-icons/fa";

type TableHeaderProps = {
    sortColumn: string;
    sortAsc: boolean;
    setSortColumn: (sortColumn: string) => void;
    setSortAsc: (asc: boolean) => void;
}

export default function TableHead({sortColumn, sortAsc, setSortAsc, setSortColumn}:TableHeaderProps){
 

   
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