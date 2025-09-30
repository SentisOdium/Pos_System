"use client";

import { salesObject } from "@/app/components/common/userObject";
import { useTableData } from "@/app/components/hooks/useTableData";
import SearchQuery from "@/app/components/ui/searchQuery/searchQuery";
import { useSignedIn } from "@/app/components/hooks/authHooks";
import TableSales from "@/app/components/ui/Tables/salesTable/STableSales";
// import add btn

export default function SalesTable(){
    useSignedIn();

    const {
        data: sales, //what the hell is ths?? the name of tte data??
        loading,     page, 
        setPage,     totalPages,
        searchQuery, setSearchQuery,
        sortColumn,  setSortColumn,    
        sortAsc,     setSortAsc,
        fetchData,    setLimit, 
        subTotalSale, setSubTotalSale,
        totalSale, setTotalSale
    } = useTableData<salesObject>({
       apiUrl: "http://localhost:5000/api/sales",
       initialSortColumn: "createAt", //so the last input hsold display
    });

    return(
        <div className='w-full flex flex-col mt-15 items-center justify-center border p-5'>
            <div className="m-5 w-full flex border justify-center">

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
                    // add the subt and total here
                />
            </div>
        </div>
    )
}