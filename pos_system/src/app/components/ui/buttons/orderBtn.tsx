"use client";

import React, { useState } from "react";
import Modal from "../modal/Modal";
import { CartProps } from "@/app/(pages)/(Pages)/orderPage/page";

type OrderProps = {
    id?: string;
    item?: string;
    price?: number;
    addToCart?: (item: CartProps) => void;
}

export const AddItemBtn = ({id, item, price = 0, addToCart}: OrderProps) => {
    const [showModal, setShowModal] = useState(false);
    const [quantity,setQuantity] = useState(1);

    const increment = () => setQuantity(prev => prev + 1);
    const  decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    const handleClick = () => {
       setShowModal(true);
    }

    const handleAddToCart = () => {
        console.log("Added to cart:",id, item, price);
        console.log("total price: ", quantity * price);

        addToCart?.({
            id, item, price, quantity
        })

        setShowModal(false);
        setQuantity(1);
    };
    return(
        <>
            <button
                onClick={handleClick}
                className="bg-yellow-500 hover:bg-yellow-600 px-3 m-1 text-gray-900 font-bold py-2 rounded mt-4">
                    Add to Cart!                              
            </button>

            <Modal  isVisible={showModal} onClose={() => setShowModal(false)}>
                 <div className="flex flex-col items-center gap-4 p-4">
                    
                    <h2 className="text-2xl font-bold"> Select Quantity</h2>
                    <h3>{item}</h3>
                    <span className="text-lg font-semibold">₱ {quantity * price}</span>
                    <div className="flex items-center gap-4">
                        
                        <button
                            onClick={decrement}
                            className="bg-gray-200 px-3 py-1 rounded-full">
                                -
                        </button>

                        <span className="text-lg font-semibold">{quantity}</span>
                        
                        <button
                            onClick={increment}
                            className="bg-gray-200 px-3 py-1 rounded-full">
                                +
                        </button>

                    </div>

                    <button
                        onClick={handleAddToCart}
                        className="bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded font-bold">
                        Add to Cart
                    </button>
                </div>
            </Modal>
        </>
    )
}