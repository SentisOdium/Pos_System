"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/components/contexts/userContext";

export function isSignedIn (redirect: string = "/auth/login"){
    const { user } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (user === null){
            router.replace(redirect);
        }
    },[user, router, redirect]);
}

export function isUserAuthenticated(redirect: string = "/"){
    const { user } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (user !== null){
            router.replace(redirect);
        }
    },[user, router, redirect]);
}
