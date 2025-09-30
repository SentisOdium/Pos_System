"use client";

import React,{useState} from "react";
import Modal from "../modal/Modal";

type ItemProps = {
    item?: string;
    price?: string;
    description?: string;
    url?: string;
}


export const ImagePreview =({item, price, description, url}: ItemProps) => {

    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);  
    
    const openModalFunction = () => {
        setShowModal(true);
        setLoading(true);
        setTimeout(() => setLoading(false), 150);
    }
    return(
        <>
            <div className="w-[150px] h-[150px] mx-auto mt-8 rounded-xl overflow-hidden">
                <img
                    src={`https://drive.google.com/thumbnail?id=${url}`}
                    alt={item}
                    className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out transform hover:scale-110"
                    onClick={openModalFunction}
                />
            </div>

            <Modal isVisible={showModal} onClose={() => setShowModal(false)} >
                {loading ? (
                    <div className="flex items-center justify-center">
                        <p className="font-bold text-xl">Loading Item</p>    
                    </div>
                    
                ):(
                 <div>
                    <div className="flex items-center justify-center space-x-5 border-b">
                        <div className="px-3 py-1  text-xl font-bold text-gray-800">
                            {item}
                        </div>
                        <div className="px-3 py-1  text-xl font-bold text-green-700">
                            ₱ {price}
                        </div>
                    </div> 

                    <div className="w-[400px] h-[400px] mx-auto mt-8 rounded-xl overflow-hidden">
                        <img  src={`https://drive.google.com/thumbnail?id=${url}`}
                            alt={item}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>  
                    <div className="mt-4 px-2">
                        <p className="text-gray-700 text-base leading-relaxed text-center max-h-32 overflow-y-auto">
                            {description || "No description available."}
                        </p>
                    </div>
                    
                    <div className="flex place-self-end">
                        <CancelBtn onClose={() => setShowModal(false)}/>
                    </div>
                </div>
                    
                )}
               

            </Modal>
        </>
    )
}

export const CancelBtn = ({onClose}: {onClose: () => void}) =>{
    return(
        <button className="bg-gray-400 hover:bg-gray-500 px-5 m-1 
            text-white font-semibold py-2 rounded-full mt-4" onClick={onClose}>
                Close
        </button>   
    )
}