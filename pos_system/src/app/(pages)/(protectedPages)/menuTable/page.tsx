"use client";

import { menuObject } from "@/app/components/common/userObject";
import { useTableData } from "../../useTableData";
import TableMenus from "@/app/components/ui/Tables/menuTable/MTableMenus";

export default function MenuTable(){
    const   {
                data: menu, 
                loading,     page, 
                setPage,     totalPages,
                searchQuery, setSearchQuery,
                sortColumn,  setSortColumn,    
                sortAsc,     setSortAsc,
                fetchData
            } = useTableData<menuObject>({
                apiUrl: "http://localhost:5000/api/menu",
                initialSortColumn: "sku",
            })

    return(
        <div className='w-full flex flex-col mt-15 items-center justify-center border p-5'>
            <div className='m-5 w-full flex border justify-center'>
                <h1>test</h1>
            </div>
            <div className='flex justify-center'>
                <TableMenus 
                    menu={menu}
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
                />
            </div>
        </div>
    )
}