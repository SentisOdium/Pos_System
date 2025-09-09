"use client";

import React, { useContext, useEffect, createContext, useState } from "react";
import { userdata } from "./updateSignedInUser";
import { fetchUser } from "./fetchSignedInUser";


type UserContextType = {
  user: userdata | null;
  setUser: (user: userdata | null) => void;
  loading: boolean; 
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({children} : {children: React.ReactNode}){
    const [user, setUser] = useState<userdata | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadUser() {
            try {
                const data = await fetchUser();
                setUser(data); 
                
            } catch (err) {
                console.error("Failed to Fetch User!", err);
                setUser(null); 
            }finally{
                setLoading(false);
            }
        }
        loadUser();
    },[]);

     return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within a UserProvider");
  return ctx;
}