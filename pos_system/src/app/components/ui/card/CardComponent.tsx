"use client";

import React  from "react";

import { PiBasketBold } from "react-icons/pi";

type CardProps = {
    
    children: React.ReactNode
}
const CardComponent = ({children}: CardProps) =>{
    return(
        <div>
            <div className="border rounded-4xl shadow-lg min-w-[300px]">
            
                <div className="card-body">
                    {children}
                </div>

                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 
                rounded-3xl mt-7 mb-3 mr-5 flex place-self-end align-middle items-center gap-1"> 
                   <PiBasketBold className="text-xl"/>  Add to Cart! 

                </button>
            </div>
        </div>
    )
}
export default CardComponent;