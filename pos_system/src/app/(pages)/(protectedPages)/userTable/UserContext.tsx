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
        };

        export const TableUserContext = createContext<UserContextType | undefined>(undefined);

        export const UserProvider = ({children} : {children: React.ReactNode}) => {
            const [users, setUsers] = useState<userObject[]>([]);
            const [loading, setLoading] = useState(false);
            const [page, setPage] = useState(1);
            const [limit, setLimit] = useState(5);
            const [totalPages, setTotalPages] = useState(1);
            const [searchQuery, setSearchQuery] = useState("");

            const fetchUsers = async () => {
            setLoading(true);
            try {
            const res = await axios.get(
                `http://localhost:5000/api/accounts?page=${page}&limit=${limit}&search=${searchQuery}`,
                {
                withCredentials: true,
                }
            );

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
            }, [page, limit, searchQuery])
            return(
                <TableUserContext.Provider value={{ 
                    users, setUsers, 
                    page, setPage, limit, 
                    setLimit, loading, 
                    setLoading, 
                    totalPages, setTotalPages,
                    searchQuery, setSearchQuery}}>
                        {children}
                </TableUserContext.Provider>
            )
        }
