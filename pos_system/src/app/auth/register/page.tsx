"use client";

import React, { useState, useEffect } from "react";
import { registerUser } from "../../components/helperFunctions/register";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { SignupFormSchema } from "@/lib/defenitions";
import "../../styles/auth.css";

export default function Register() {

  const router = useRouter();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formData, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userValidation = SignupFormSchema.safeParse(formData);

    if (!userValidation.success) {
      const fieldErrors: { [key: string]: string } = {};
      userValidation.error.issues.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0].toString()] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});

    try {
      const result = await registerUser(formData);
      toast.success("Successfully created an Account!");
      console.log(result);
      router.push("/auth/login");
    } catch (err: any) {
      toast.error("Failed to Create User! Please Try Again!");
    }
  };

  return (
    <div className="container mx-auto max-w-md p-6">
      <div className="form-container bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          {/* Name */}
          <div className="flex flex-col">
            {errors.name && <p className="text-red-500 text-sm mb-1">{errors.name}</p>}
            <input
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="input rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            {errors.email && <p className="text-red-500 text-sm mb-1">{errors.email}</p>}
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
              value={formData.password}
              onChange={handleChange}
              className="input rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
