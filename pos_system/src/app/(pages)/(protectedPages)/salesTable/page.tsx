"use client";

import { salesObject } from "@/app/components/common/userObject";
import { useTableData } from "@/app/components/hooks/useTableData";
import SearchQuery from "@/app/components/ui/searchQuery/searchQuery";
import { useSignedIn } from "@/app/components/hooks/authHooks";
import TableSales from "@/app/components/ui/Tables/salesTable/STableSales";
import { AddBtn } from "@/app/components/ui/buttons/TableBtn";
import CardComponent from "@/app/components/ui/card/CardComponent";
import { FaChartBar } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

export default function SalesTable(){
    useSignedIn();

    const {
        data: sales, 
        loading,     page, 
        setPage,     totalPages,
        searchQuery, setSearchQuery,
        sortColumn,  setSortColumn,    
        sortAsc,     setSortAsc,
        fetchData,    setLimit, 
        subTotalSale, setSubTotalSale,
        totalSale, setTotalSale, totalUsers
    } = useTableData<salesObject>({
       apiUrl: "http://localhost:5000/api/sales",
       initialSortColumn: "createAt", 
       isSalesTable: true
    });

    return(
        <div className='w-full flex flex-col mt-15 items-center justify-center border p-5'>
            <div className="flex gap-4 ">
                <CardComponent className="bg-yellow-500 p-5 text-white font-semibold text-xl flex items-center justify-between">
                    <FaChartBar className="text-6xl" />
                    <h1>Total Sales: {totalSale}</h1>
                </CardComponent>

                <CardComponent className="bg-red-500 p-5 text-white font-semibold text-xl flex items-center justify-between">
                    <FaRegUserCircle className="text-6xl"/>
                    <h1>Total Customers: {totalUsers}</h1>
                </CardComponent>
            </div>

            <div className="m-5 w-full flex border justify-center">
                <SearchQuery setSearchQuery={setSearchQuery} setPage={setPage} />
                <AddBtn fetchData={fetchData}  mode='sales'/>
            </div>

            <div className='flex justify-center'>
                <TableSales
                    sales={sales}
                    loading={loading}
                    page={page}
                    setPage={setPage}
                    totalPages={totalPages}
                    searchQuery={searchQuery}
                    setsearchQuery={setSearchQuery}
                    sortColumn={sortColumn}      
                    sortAsc={sortAsc}
                    setSortColumn={setSortColumn}
                    setSortAsc={setSortAsc}
                    fetchData={fetchData}
                    setLimit={setLimit}
                />
            </div>
        </div>
    )
}