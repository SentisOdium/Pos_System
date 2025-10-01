import { useState, useEffect } from "react";
import axios from "axios";

type UseTableDataOptions = {
    apiUrl: string;
    initialSortColumn: string;
    isSalesTable?: boolean;
}

type ApiResponse<T> ={
    totalPages?: number;
    users?: T[];
    menu?: T[];
    sales?: T[];
    total?: number;
    totalUsers?: number;
    subTotalSale?: number;
    totalSale?: number;
}

export function useTableData<T>({apiUrl, initialSortColumn, isSalesTable} : UseTableDataOptions){
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(false);

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const [totalPages, setTotalPages] = useState(1);

    const [searchQuery, setSearchQuery] = useState("");
    const [sortColumn, setSortColumn] = useState(initialSortColumn);
    const [sortAsc, setSortAsc] = useState(true);

    const [subTotalSale, setSubTotalSale] = useState<number | null>(null);
    const [totalSale, setTotalSale] = useState<number | null>(null);
    const [totalUsers, setTotalUsers] = useState<number | null>(null);

    const fetchData = async () => {
        setLoading(true);

        try {
            const res = await axios.get(apiUrl,{
                params:{
                    page,
                    limit,
                    search: searchQuery,
                    column: sortColumn,
                    order: sortAsc ? "ASC" : "DESC",
                },
                withCredentials: true,
            })

            const responseData: ApiResponse<T> = res.data;

            setData(responseData.users || responseData.menu || responseData.sales || []);
            setTotalPages(responseData.totalPages || 1);
            
            if (isSalesTable && responseData.sales){
                setTotalUsers(responseData.total ?? null);
                setSubTotalSale(Number(responseData.subTotalSale || 0));
                setTotalSale(Number(responseData.totalSale || 0));
            }else{
                setTotalUsers(null);
                setSubTotalSale(null);
                setTotalSale(null);
            }
        } catch (err) {
            console.error("Fetch Error", err);
        } finally{
            setLoading(false);
        };  
    }

    useEffect(() =>{
        fetchData();
    }, [apiUrl, page, limit, searchQuery, sortColumn, sortAsc]);
    return{
            data, setData,
            loading, setLoading,
            page, setPage,
            limit, setLimit,
            totalPages, setTotalPages,
            searchQuery, setSearchQuery,
            sortColumn, setSortColumn,
            sortAsc, setSortAsc,
            fetchData, subTotalSale,
            setSubTotalSale, totalSale,
            setTotalSale, totalUsers, setTotalUsers
        };
}