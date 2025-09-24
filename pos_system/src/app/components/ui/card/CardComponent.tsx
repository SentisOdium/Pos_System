"use client";

import React  from "react";

type CardProps = {
    className?: string,
    children: React.ReactNode
}
const CardComponent = ({children, className}: CardProps) => {
    return(
        <div  className={`bg-gray-200  rounded-2xl shadow-md overflow-hidden flex flex-col ${className}`}>
            {children}
        </div>
    )
}
export default CardComponent;
