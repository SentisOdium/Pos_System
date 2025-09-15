        "use client";
        import React,{createContext, useContext, useEffect, useState} from "react";
        import { userObject } from "@/app/components/common/userObject";
        import axios from "axios";

        type UserContextType = {
            users: userObject[];
            setUsers: React.Dispatch<React.SetStateAction<userObject[]>>;
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
            fetchUsers: () => Promise<void>;   

        };

        export const TableUserContext = createContext<UserContextType | undefined>(undefined);

        export const UserProvider = ({children} : {children: React.ReactNode}) => {
            const [users, setUsers] = useState<userObject[]>([]);
            const [loading, setLoading] = useState(false);
            
            //pagination
            const [page, setPage] = useState(1);
            const [limit, setLimit] = useState(5);
            const [totalPages, setTotalPages] = useState(1);
            const [searchQuery, setSearchQuery] = useState("");
            const [sortColumn, setSortColumn] = useState<string>("name");
            const [sortAsc, setSortAsc] = useState<boolean>(true);

            const fetchUsers = async () => {
            setLoading(true);
            try {
            const res = await axios.get(
                `http://localhost:5000/api/accounts`,
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

            const data =  res.data;

                setUsers(data.users); 
                setTotalPages(data.totalPages);
            } catch (err) {
                console.error("Fetch error:", err);
            } finally {
                setLoading(false);
            }
        };

            useEffect(() => {
                fetchUsers();
            }, [page, limit, searchQuery,sortColumn, sortAsc])
            return(
                <TableUserContext.Provider value=
                {{ 
                    users,       setUsers, 
                    page,        setPage, 
                    limit,       setLimit, 
                    loading,     setLoading, 
                    totalPages,  setTotalPages,
                    searchQuery, setSearchQuery,
                    sortColumn,  setSortColumn,
                    sortAsc,      setSortAsc,
                    fetchUsers,
                }}>
                        {children}
                </TableUserContext.Provider>
            )
        }
