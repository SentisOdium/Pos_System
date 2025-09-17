"use client";

import React,{useState} from 'react'
import { useRouter } from "next/navigation";
import "../../styles/auth.css";
import { loginUser } from './login';
import { ToastContainer, toast } from 'react-toastify';
import { LoginFormSchema } from '@/lib/defenitions';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const userValidation = LoginFormSchema.safeParse({email, password});

  if(!userValidation.success){
    const fieldErrors: {[key: string]: string} = {};
    
     userValidation.error.issues.forEach((issue: any) => {
    if (issue.path[0]) {
      fieldErrors[issue.path[0].toString()] = issue.message;
    }
  });

  setErrors(fieldErrors);
  return;
  }

  setErrors({});

  try {
    const result = await loginUser({ email, password });
    toast.success("Login Successful");
    router.push("/auth/userPage");
  } catch (error: any) {
    toast.error("Login failed");
  }
};

  return (
   <div className='container'>
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <div className='input-container'>
                  {errors.email && <p className="text-red-500">{errors.email}</p>}
                    <input  id="email" 
                            name="email" 
                            type="email" 
                            placeholder="Email"  
                            className='input'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                    {errors.password && <p className="text-red-500">{errors.password}</p>}
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
