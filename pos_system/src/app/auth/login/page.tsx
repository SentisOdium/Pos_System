"use client";

import React,{useState} from 'react'
import { useRouter } from "next/navigation";
import "../../styles/auth.css";
import { loginUser } from './login';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const result = await loginUser({email, password});
      console.log("Login Successful: ", result)
      alert("Logged-in Successfully")
      router.push("/");
    } catch (error: any) {
      console.error("Login failed full error:", error);
    console.error("Login failed response:", error.response);
    throw new Error(error.response?.data?.error || error.message || "Failed to login user");
    }
  }

  return (
   <div className='container'>
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <div className='input-container'>
                    <input  id="email" 
                            name="email" 
                            type="email" 
                            placeholder="Email"  
                            className='input'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    <input 
                            id="password" 
                            name="password" 
                            type="password" 
                            placeholder='Password'
                            className='input' 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                    
                    <button type="submit" className='bg-red-500 hover:bg-red-600'>Login</button>    
                </div>
                
                
            </form>
        </div>
    </div>
  )
}
