import React,{useContext} from "react";
import { TableUserContext } from '@/app/(pages)/(protectedPages)/userTable/UserContext';

export default function SetRows(){
    const data = useContext(TableUserContext);
        
    if (!data) {
        throw new Error("Table Footer must be used within a PageContext.Provider");
    }
        
    const {setLimit, setPage} = data;

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