import React, { useState } from "react";
import { SearchQueryProps } from "../../common/userObject";

export default function SearchQuery({setPage, setSearchQuery}: SearchQueryProps) {
    const [input, setInput] = useState("");
       
        const debounceDelay = 600;
        let debounce: NodeJS.Timeout;

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);

       if (debounce) clearTimeout(debounce);    

        debounce = setTimeout(() => {
            setSearchQuery(e.target.value);
            setPage(1); 
        }, debounceDelay);
   }

    return(
        <div className="flex justify-center">
            <div className="flex items-center bg-gray-200 rounded-lg overflow-hidden">
                <input
                type="text"
                value={input}
                onChange={handleChange}
                placeholder="Search..."
                className="px-4 py-1 w-[500px] background:none focus:outline-none"
                />
                
            </div>
        </div>

    )
}