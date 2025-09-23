"use client";

import { userObject } from "@/app/components/common/userObject";
import { useTableData } from "../../useTableData";
import TableAccounts from "@/app/components/ui/Tables/accountsTable/ATableAccounts";
import SearchQuery from "@/app/components/ui/searchQuery/searchQuery";
import { AddBtn } from "@/app/components/ui/modal/buttons/TableBtn";

export  default function AccountsTable(){
    const {
        data: accounts,
        loading,     page, 
        setPage,     totalPages,
        searchQuery, setSearchQuery,
        sortColumn,  setSortColumn,    
        sortAsc,     setSortAsc,
        fetchData,    setLimit
    }= useTableData<userObject>({
        apiUrl: "http://localhost:5000/api/accounts",
        initialSortColumn: "name",
    })

    return(
            <div className='w-full flex flex-col mt-15 items-center justify-center border p-5'>
                <div className='m-5 w-full flex border justify-center'>
                    <SearchQuery setSearchQuery={setSearchQuery} setPage={setPage} />
                    <AddBtn fetchData={fetchData}  mode='account' />
                </div>
                <div className='flex justify-center'>
                    <TableAccounts 
                        accounts={accounts}
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