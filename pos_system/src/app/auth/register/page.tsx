"use client";

import React, { useState, useEffect } from "react";
import { registerUser } from "../../components/helperFunctions/register";
import "../../styles/auth.css";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { SignupFormSchema } from "@/lib/defenitions";
import { isUserAuthenticated } from "@/app/components/hooks/authHooks";
export default function Register() {

  isUserAuthenticated();
  
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
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            {errors.name && (
              <p className="text-red-500 text-sm mb-1">{errors.name}</p>
            )}
            <input
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="input"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mb-1">{errors.email}</p>
            )}
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input"
            />

            {errors.password && (
              <p className="text-red-500 text-sm mb-1">{errors.password}</p>
            )}
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="input"
            />

            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
