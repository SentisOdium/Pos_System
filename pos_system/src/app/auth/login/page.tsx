"use client";

import React,{useEffect, useState} from 'react'
import "../../styles/auth.css";
import { loginUser } from '../../components/helperFunctions/loginUser';
import { toast } from 'react-toastify';
import { LoginFormSchema } from '@/lib/defenitions';
import { useUser } from '../../components/contexts/userContext';
import { fetchUser } from '../../components/helperFunctions/fetchSignedInUser';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [loading, setLoading] = useState(false);
  const { setUser } = useUser(); 

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
  setLoading(true);

  try {
    const result = await loginUser({ email, password }, setUser);

    if(result.user){
      setUser(result.user);
      
    }else{
      const loggedInUser = await fetchUser();
      setUser(loggedInUser);
    }
    toast.success("Login Successful");
    router.replace("/");
   
  } catch (error: any) {
     toast.error(error?.response?.data?.message || "Login failed");
  } finally{
    setLoading(false);
  }
};

  return (
   <div className="container mx-auto max-w-sm p-6">
      <div className="form-container bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {/* Email */}
          <div className="flex flex-col">
            {errors.email && <p className="text-red-500 text-sm mb-1">{errors.email}</p>}
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            {errors.password && <p className="text-red-500 text-sm mb-1">{errors.password}</p>}
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-lg border border-gray-300 px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>
      </div>
    </div>
  )
}
