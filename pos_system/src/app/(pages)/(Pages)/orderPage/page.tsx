"use client";

import React, { useState, useEffect } from "react";
import { useTableData } from "../../../components/hooks/useTableData";
import { menuObject } from "@/app/components/common/userObject";
import PaginationControls from "@/app/components/ui/pagnation/pagination";
import CardComponent from "@/app/components/ui/card/CardComponent";
import { CheckoutNav } from "@/app/components/ui/checkout/checkoutNav";
import { ImagePreview } from "@/app/components/ui/buttons/itemPreviewBtn";
import { AddItemBtn } from "@/app/components/ui/buttons/orderBtn";
import { OrderPageNav } from "@/app/components/ui/dropdown/OrderPageNav";
import SearchQuery from "@/app/components/ui/searchQuery/searchQuery";
import { useUser } from "@/app/components/contexts/userContext";
import RedirectLoginBtn from "@/app/components/ui/buttons/redirectLoginBtn";

export type CartProps = {
    id?: string;
    item?: string;
    price?: number;
    quantity: number;
}
export default function OrderPage() {

    const [cart, setCart] = useState<CartProps[]>([]);
    const { user } = useUser();
    const   {
                data: menu,  
                loading,     
                page, 
                setPage,    
                totalPages,
                setSearchQuery,
            } = useTableData<menuObject>({
                apiUrl: "http://localhost:5000/api/menu?limit=12",
                initialSortColumn: "sku",
            })
        
            if (loading) {
                return <div>Loading Menu...</div>;
            }
    
    const addToCart = ({id, item, price, quantity}: CartProps) =>{
        setCart(prev => {
            const existingIndex = prev.findIndex(i => i.id === id);

            if(existingIndex >= 0){
                const updated = [...prev];
                updated[existingIndex].quantity += quantity || 1;
                return updated;
            }

            return [...prev, {id, item, price, quantity: quantity || 1}];
        })
    }
    return (
        <div className="w-full fixed top-[74.5px]  z-50">
           
            <OrderPageNav setSearchQuery={setSearchQuery} setPage={setPage}/>
                
            {user !== null && (<div className="absolute top-3 inset-y-0 right-0 w-90">
               <CheckoutNav  cart={cart} setCart={setCart}/>
            </div>)}

            <div className="flex flex-col items-center border mt-2">
            
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 ">
                    {menu.length > 0 ? 
                        (
                            menu.map((item) =>(
                                <CardComponent
                                    key={item.id} className="w-[180px] h-[345px] gap-2">
                                    
                                        <ImagePreview 
                                            item={item.item} 
                                            price={item.price}
                                            url={item.url}
                                            description={item.description}
                                        />

                                    <div className="flex flex-col flex-1 p-4">
                                        <h3 className="text-gray-800 font-medium text-base text-center">
                                            {item.item}
                                        </h3>
                                        
                                        <p  className="mt-auto text-lg font-semibold text-center border-t pt-2 text-gray-900">
                                            ₱ {item.price}
                                        </p>

                                        { user !== null ? 
                                        (<AddItemBtn 
                                            id={item.id} 
                                            item={item.item} 
                                            price={Number(item.price)}
                                            addToCart={addToCart}/>
                                        ) 
                                        : 
                                        (
                                            <RedirectLoginBtn/>
                                        )}
                                        
                                    </div>
                                                                        
                                </CardComponent>
                            )) ):(
                                <p>No menu items available.</p>
                            )
                    }
                </div>

                <div className="mt-5">
                    <PaginationControls page={page} setPage={setPage} totalPages={totalPages}/>
                </div>
                
            </div>
        </div>
    )
    
}