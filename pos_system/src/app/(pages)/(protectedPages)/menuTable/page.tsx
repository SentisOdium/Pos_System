"use client";

import { menuObject } from "@/app/components/common/userObject";
import { useTableData } from "../../../components/hooks/useTableData";
import SearchQuery from "@/app/components/ui/searchQuery/searchQuery";
import TableMenus from "@/app/components/ui/Tables/menuTable/MTableMenus";
import { AddBtn } from "@/app/components/ui/buttons/TableBtn";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/components/contexts/userContext";
import { isSignedIn } from "@/app/components/hooks/authHooks";
import Spinner from "@/app/components/ui/spinner/spinner";
export default function MenuTable(){
    isSignedIn();

    const router = useRouter();
    const { user } = useUser();

    useEffect(() => {
        if(!user){
            router.replace("/");
        }
        
    }, [user, router])


    const   {
                data: menu, 
                loading,     page, 
                setPage,     totalPages,
                searchQuery, setSearchQuery,
                sortColumn,  setSortColumn,    
                sortAsc,     setSortAsc,
                fetchData,    setLimit
            } = useTableData<menuObject>({
                apiUrl: "http://localhost:5000/api/menu",
                initialSortColumn: "sku",
            })

    if(!user){
        return <Spinner/>
    }

    return(
        <div className='w-full flex flex-col mt-15 items-center justify-center border p-5'>
            <div className='m-5 w-full flex border justify-center'>
                <SearchQuery setPage={setPage} setSearchQuery={setSearchQuery} />
                <AddBtn fetchData={fetchData}  mode='menu' />
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
                    setLimit={setLimit}
                />
            </div>
        </div>
    )
}