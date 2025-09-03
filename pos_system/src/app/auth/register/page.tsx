"use client";

import React, {useState, useEffect} from 'react'
import { registerUser } from './register';
import "../../styles/auth.css";
import { useRouter } from 'next/navigation';

export default function Register() {
    const router = useRouter();

    const [formData, setFormdata] = useState({
         name: "",
        email: "",
        password: ""
    });

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setFormdata({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: any) =>{
        e.preventDefault();
        try {
            const result = await registerUser(formData);
            alert("Account created successfully!");
            console.log(result);
            router.push("/auth/login");
        } catch(err: any){
            console.log("Failed to create account", err);
        }
    } 

  return (
    <div className='container'>
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <div className='input-container'>
                    <input  id="name" 
                            name="name" 
                            placeholder="Name" 
                            value={formData.name}
                            onChange={handleChange}
                            className='input'/>

                    <input  id="email" 
                            name="email" 
                            type="email" 
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className='input'/>
                    <input 
                            id="password" 
                            name="password" 
                            type="password" 
                            placeholder='Password'
                            value={formData.password}
                            onChange={handleChange}
                            className='input' />
                    
                    <button type="submit" className='bg-red-500 hover:bg-red-600'>Sign Up</button>    
                </div>
                
                
            </form>
        </div>
    </div>
  )
}
