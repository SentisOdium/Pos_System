import { tblHeaders } from "../../common/userObject";

export default function TableHead(){
    return(
        <thead>
             <tr className="bg-gray-200 p-2">
                {tblHeaders.map(({KEY, label}) => (
                            <th key={KEY} className="border border-gray-400 px-4 py-2">
                                {label}
                            </th>
                    ))}
             </tr>
        </thead>
    )
}