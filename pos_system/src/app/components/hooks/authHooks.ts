"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/components/contexts/userContext";

export function useSignedIn (redirect: string = "/auth/login"){
    const { user, loading } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!loading && user === null){
            router.replace(redirect);
        }
    },[user, router, redirect]);
}
