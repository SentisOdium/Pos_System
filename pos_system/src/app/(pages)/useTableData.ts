import { useState, useEffect } from "react";
import axios from "axios";

type UseTableDataOptions = {
    apiUrl: string;
    initialSortColumn: string;
}

export function useTableData<T>({apiUrl, initialSortColumn} : UseTableDataOptions){
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(false);

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const [totalPages, setTotalPages] = useState(1);

    const [searchQuery, setSearchQuery] = useState("");
    const [sortColumn, setSortColumn] = useState(initialSortColumn);
    const [sortAsc, setSortAsc] = useState(true);

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

            const responseData = res.data;

            setData(responseData.users || responseData.menu || []);
            setTotalPages(responseData.totalPages || 1);
        } catch (err) {
            console.error("Fetch Error", err);
        } finally{
            setLoading(false);
        };  
    }

    useEffect(() =>{
        fetchData();
    }, [page, limit, searchQuery, sortColumn, sortAsc]);
    return{
            data, setData,
            loading, setLoading,
            page, setPage,
            limit, setLimit,
            totalPages, setTotalPages,
            searchQuery, setSearchQuery,
            sortColumn, setSortColumn,
            sortAsc, setSortAsc,
            fetchData,
        };
}