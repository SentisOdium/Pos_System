import { tblSalesHeader } from "../../../common/userObject";
import { FaCaretUp } from "react-icons/fa";
import { TableHeaderProps } from "../../../common/userObject";

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
                {tblSalesHeader.map(({KEY, label, sortable}) =>(
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