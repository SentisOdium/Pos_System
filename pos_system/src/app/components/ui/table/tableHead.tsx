import { tblHeaders } from "../../common/userObject";

export default function TableHead(){
    return(
        <thead>
             <tr className="bg-gray-200 p-2">
                {tblHeaders.map(({KEY, label}) => (
                            <th key={KEY} className="border border-gray-300 p-2 w-1/7 break-words text-center">
                                {label}
                            </th>
                    ))}
             </tr>
        </thead>
    )
}