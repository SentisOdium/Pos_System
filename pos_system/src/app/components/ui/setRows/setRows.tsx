    import React from "react";
    import { SetRowsProps } from "../../common/userObject";

    export default function SetRows({setPage, setLimit}:SetRowsProps) {
    
        return(
            <select className="border-2 border-gray-300 rounded-md p-1 " 
                    onChange={(e)=> {setLimit(Number((e.target as HTMLSelectElement).value));
                    setPage(1);}}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
            </select>
        )
    }