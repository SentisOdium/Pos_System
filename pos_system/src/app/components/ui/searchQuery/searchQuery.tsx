import React, { useContext, useState } from "react";
import { TableUserContext } from "@/app/(pages)/(protectedPages)/userTable/UserContext";

export default function SearchQuery(){
    const data = useContext(TableUserContext);
    const [input, setInput] = useState("");

        if (!data) {
          throw new Error("Search must be used within a Provider");
        }
      
        const { setSearchQuery, setPage } = data;
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
                        className=" p-2 w-[500px] focus:outline-none bg-none" 
                        placeholder="Search..."
                        onChange={handleChange}
                    />
                <button className="p-2" onClick={() => setSearchQuery(input)}></button>
            </div>
        </div>
    )
}