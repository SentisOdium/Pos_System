import React,{createContext, useEffect, useState} from "react";
import { menuObject } from "@/app/components/common/userObject";
import axios from "axios";

type MenuContextType = {
    menu: menuObject[];
    setMenu: React.Dispatch<React.SetStateAction<menuObject[]>>
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>
    limit: number;
    setLimit: React.Dispatch<React.SetStateAction<number>>
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    totalPages: number;
    setTotalPages: React.Dispatch<React.SetStateAction<number>>;
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    sortColumn: string;
    setSortColumn: React.Dispatch<React.SetStateAction<string>>;
    sortAsc: boolean;
    setSortAsc: React.Dispatch<React.SetStateAction<boolean>>;
    fetchMenu: () => Promise<void>;
}

export const TableMenuContext = createContext<MenuContextType | undefined>(undefined);


export const MenuProvider = ({children}: {children: React.ReactNode}) =>{
    const [menu, setMenu] = useState<menuObject[]>([]);
    const [loading, setLoading] = useState(false);

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const [totalPages, setTotalPages] = useState(1);    
    const [searchQuery, setSearchQuery] = useState("");
    const [sortColumn, setSortColumn] = useState<string>("sku");
    const [sortAsc, setSortAsc] = useState<boolean>(true); 

    const fetchMenu =  async () => {
        setLoading(true);
        try{
            const res = await axios.get(
                `http://localhost:5000/api/menu`,
                {
                    params:{
                        page,
                        limit,
                        search: searchQuery,
                        column: sortColumn || "name",
                        order: sortAsc ? "ASC" : "DESC",
                    },
                    withCredentials: true,
                });

                const data = res.data;
                setMenu(data.menu); 
                setTotalPages(data.totalPages);

        }catch(err){
            console.error("Fetch Error: ", err);
        }finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMenu();
    },[page, limit, searchQuery, sortColumn, sortAsc])

    return(
        <TableMenuContext.Provider value=
            {{ 
                menu,        setMenu, 
                page,        setPage, 
                limit,       setLimit, 
                loading,     setLoading, 
                totalPages,  setTotalPages,
                searchQuery, setSearchQuery,
                sortColumn,  setSortColumn,
                sortAsc,      setSortAsc,
                fetchMenu,
            }}>
                {children}
        </TableMenuContext.Provider>
    )
}