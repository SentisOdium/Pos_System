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
        <div className=" ">
            <div className="flex items-center bg-gray-200 p-1 rounded-4xl">
                    <input type="text"
                        value={input}  
                        className=" p-2 w-[500px] focus:outline-none " 
                        placeholder="Search..."
                        onChange={handleChange}
                    />
                <button className="p-2" onClick={() => setSearchQuery(input)}></button>
            </div>
        </div>
    )
}