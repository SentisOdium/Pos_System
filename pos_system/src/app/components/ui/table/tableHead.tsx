import { tblHeaders } from "../../common/userObject";
import { FaCaretUp } from "react-icons/fa";
export default function TableHead(){

    function headerClick(){

    }

    return(
        <thead>
             <tr className="bg-gray-200 p-2">
                {tblHeaders.map(({KEY, label}) => (
                            <th key={KEY} className="border border-gray-300 p-2 w-1/7 break-words text-center items-center" onClick={headerClick}>
                               <span> {label} <FaCaretUp/></span>
                            </th>
                    ))}
             </tr>
        </thead>
    )
}