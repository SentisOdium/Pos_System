"use client";
import CardComponent from "@/app/components/ui/card/CardComponent";
import React, {useEffect} from "react";
import { useTableData } from "../../useTableData";
import { menuObject } from "@/app/components/common/userObject";
import PaginationControls from "@/app/components/ui/pagnation/pagination";

export default function OrderPage() {
    const   {
                data: menu,  setLimit, loading,     page, 
                setPage,     totalPages,searchQuery, setSearchQuery,
                sortColumn,  setSortColumn,    
sortAsc,     setSortAsc,
                fetchData
            } = useTableData<menuObject>({
                apiUrl: "http://localhost:5000/api/menu",
                initialSortColumn: "sku",
            })
         useEffect(() => {
                setLimit(9);
        }, [setLimit]);

            if (loading) {
                return <div>Loading Menu...</div>;
            }
    
    return (
        <div className="p-4 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {menu.length > 0 ? 
                    (
                        menu.map((item) =>(
                            <CardComponent
                                key={item.id}>
                                    <div className="mb-3 bg-gray-300 border-amber-600 rounded-t-4xl p-4">
                                        <h2 className="font-bold text-3xl mb-2">{item.item}</h2>
                                        <p className="font-italic text-xl mb-1 ">{item.category}</p>
                                        <p className="font-bold text-4xl text-green-600 mb-1">{`$${item.price}`}</p>
                                        <p className="">{item.description}</p>    
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
                    <option value="burger">Burger</option>
                    <option value="lunch">Lunch</option>
                    <option value="beverage">Beverages</option>
                    <option value="sides">Sides</option>
                    <option value="breakfast">Breakfast</option>
                </select>
            </div>
        </div>
    )
    
}