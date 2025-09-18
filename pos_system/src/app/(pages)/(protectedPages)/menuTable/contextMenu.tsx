import React,{createContext, useEffect, useState} from "react";
import { menuObject } from "@/app/components/common/userObject";
import axios from "axios";

type MenuContextType = {
    menu: menuObject[];
    
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

}