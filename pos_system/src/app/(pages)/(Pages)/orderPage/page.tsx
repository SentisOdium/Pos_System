"use client";

import React, { useState } from "react";
import { useTableData } from "../../useTableData";
import { menuObject } from "@/app/components/common/userObject";
import PaginationControls from "@/app/components/ui/pagnation/pagination";
import CardComponent from "@/app/components/ui/card/CardComponent";
import { CheckoutNav } from "@/app/components/ui/checkout/checkoutNav";
import {ImagePreview} from "@/app/components/ui/modal/buttons/itemPreviewBtn";
import { AddItemBtn } from "@/app/components/ui/modal/buttons/orderBtn";
import { toast } from "react-toastify";

export type CartProps = {
    id?: string;
    item?: string;
    price?: number;
    quantity: number;
}
export default function OrderPage() {
    const [cart, setCart] = useState<CartProps[]>([]);
    const   {
                data: menu,  
                loading,     
                page, 
                setPage,    
                totalPages,searchQuery, 
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
        <div className="p-4 mt-18 flex flex-col items-center">
            <div className="absolute top-22 inset-y-0 right-0 w-100">
               <CheckoutNav cart={cart}/> 
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 ">
                {menu.length > 0 ? 
                    (
                        menu.map((item) =>(
                            <CardComponent
                                key={item.id} className="w-[200px] h-[400px] gap-2">
                                
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

                                    {/* to be replaced with add to cart button */}
                                    <AddItemBtn 
                                        id={item.id} 
                                        item={item.item} 
                                        price={Number(item.price)}
                                        addToCart={addToCart}
                                        />
                                    
                                </div>
                                                                    
                            </CardComponent>
                        )) ):(
                            <p>No menu items available.</p>
                        )
                }
            </div>

            <div>
                <PaginationControls page={page} setPage={setPage} totalPages={totalPages}/>
            </div>
            <div>
                <select value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setPage(1); }}
                    className="border p-1 rounded">
                    <option value="">All Categories</option>
                    <option value="sides">Sides</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="burger">Burger</option>
                    <option value="dinner">Dinner</option>
                    <option value="beverage">Beverages</option>
                    <option value="dessert">Dessert</option>
                </select>
            </div>
        </div>
    )
    
}