import { CartProps } from "@/app/(pages)/(Pages)/orderPage/page";
import React from "react";
import { PiBasketBold } from "react-icons/pi";
import { IoClose } from "react-icons/io5";

type CheckoutNavProps = { 
    cart: CartProps[],
    setCart: React.Dispatch<React.SetStateAction<CartProps[]>> 
};
export const CheckoutNav = ({cart, setCart}: CheckoutNavProps) => {
    const subtotal = cart.reduce((acc, cur) => acc + (cur.price || 0 ) * cur.quantity, 0);
    const deliveryFee = 75;

    const handleClearCart = () => {
        setCart([]);
    };

    const handleClearItem = (id?: string) =>{
        setCart(prev => prev.filter(item => item.id !== id));
    }
    
    return(
        <div className="bg-gray-200/80 w-full  h-[848px] rounded-l-4xl shadow-lg p-5 ">
            <div className="flex items-center justify-center "> 
                <h1 className="flex items-center gap-2 font-bold text-3xl">
                    <PiBasketBold /> My Orders!
                </h1>
            </div>
            
            <div className="m-4 h-130 overflow-y-scroll">
                {cart.map(item => (
                    <div key={item.id} className="text-[17px] mb-5">
                        <b>{item.quantity}</b> x {item.item} = <b>₱{item.price! * item.quantity} </b> 
                        <button 
                            className="text-red-600 hover:text-red-700 "  
                            onClick={() => handleClearItem(item.id)}>
                                <IoClose />
                        </button>
                    </div>
                ))}
            </div>

                <div className="text-xl ml-5 border-t space-"> Items Total: ₱{subtotal}</div>
                <div className="ml-5">Delivery Fee: ₱{deliveryFee} (subject to change)</div>
                <div className="text-2xl ml-5"><strong>Total: ₱{deliveryFee + subtotal}</strong></div>
                <div className="place-self-end text-blue-700 hover:text-blue-900">
                    <button onClick={() => handleClearCart()}>Clear cart</button>
                </div>
                
                <div className="mt-5 w-full">
                <button
                    onClick={() => handleClearCart()}
                    className="bg-yellow-500 hover:bg-yellow-600 px-6 m-1 text-gray-900 font-bold py-2 rounded-full mt-4 w-full">
                        Checkout Order                             
                </button>
            </div>
        </div>
    )
}
