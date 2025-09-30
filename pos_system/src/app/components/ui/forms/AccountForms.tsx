"use client";
    
import { useState, useEffect } from "react"
import axios from "axios";
import { UpdateFormSchema } from "@/lib/defenitions";
import { toast } from "react-toastify";
import { FormProps } from "@/app/components/common/userObject";

export default function UserForms({mode, id, onSuccess, fetchData} : FormProps){
    const [errors, setErrors] = useState<{[key: string]: string}>({})
    const [formData, setFormdata] = useState({
        name: "",
        email: "",
        contactNo: "",
        password: "",
        description: "",
        role: "",
    });
        
    useEffect(() => {
        if(mode === "update" && id){
            const fetchUser = async () => {
                try{
                    const res = await axios.get(`http://localhost:5000/api/accounts/${id}`, {withCredentials: true}); 
                    setFormdata({
                        name: res.data.name ?? "",
                        email: res.data.email ?? "",
                        contactNo: res.data.contactNo ?? "",
                        password: res.data.password ?? "",
                        description: res.data.description ?? "",
                        role: res.data.role ?? "",
                    });
                }catch(err){
                    console.error("Error Fetching User: ", err);
                }
            };
            fetchUser();
        }
    },[mode, id])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormdata({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault();

        const userValidation = UpdateFormSchema.safeParse(formData);

        if(!userValidation.success){
            const fieldErrors: {[key: string]: string} = {};

            userValidation.error.issues.forEach((err: any) =>{
                if (err.path[0]) fieldErrors[err.path[0].toString()] = err.message; 
            });

            setErrors(fieldErrors);
                return;
            }
            
            setErrors({});

            try {
                if(mode === "add"){
                    await axios.post("http://localhost:5000/api/accounts", 
                        formData, {withCredentials: true});
                    toast.success("User Added Successfully!");
                }else if(mode === "update"){
                    await axios.put(`http://localhost:5000/api/accounts/${id}`, 
                        formData, {withCredentials: true});
                    toast.success("User Updated Successfully!");
                }else{
                    console.error("Invalid mode");  
                    toast.error("Invalid mode");
                    return;
                }

                if (fetchData) fetchData();
                if (onSuccess) onSuccess();
               

            } catch (err) {
                console.error("Error in submitting Form", err);
                toast.error("Failed to Submit Form!");
            }
        };

        return(
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">

                {/* Name */}
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                <div className="flex items-center gap-1">
                    <label htmlFor="name" className="font-semibold min-w-[120px] text-right">
                    Name
                    </label>
                    <input 
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="flex-1 rounded-xl bg-gray-200 px-3 py-2"
                    value={formData.name}
                    onChange={handleChange}
                    />
                </div>

                {/* Email */}
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                <div className="flex items-center gap-1">
                    <label htmlFor="email" className="font-semibold min-w-[120px] text-right">
                    Email
                    </label>
                    <input 
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-xl bg-gray-200 px-3 py-2"
                    value={formData.email}
                    onChange={handleChange}
                    />
                </div>

                {/* Contact Number (update only) */}
                {errors.contactNo && <p className="text-red-500 text-sm">{errors.contactNo}</p>}
                {mode === "update" && (
                    <div className="flex items-center gap-1">
                    <label htmlFor="contactNo" className="font-semibold min-w-[120px] text-right">
                        Contact Number
                    </label>
                    <input 
                        type="text"
                        id="contactNo"
                        name="contactNo"
                        placeholder="Contact No."
                        className="flex-1 rounded-xl bg-gray-200 px-3 py-2"
                        value={formData.contactNo}
                        onChange={handleChange}
                    />
                    </div>
                )}

                {/* Password (add only) */}
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                {mode === "add" && (
                    <div className="flex items-center gap-1">
                    <label htmlFor="password" className="font-semibold min-w-[120px] text-right">
                        Password
                    </label>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter password"
                        className="flex-1 rounded-xl bg-gray-200 px-3 py-2"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    </div>
                )}

                {/* Description (update only) */}
                {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                {mode === "update" && (
                    <div className="flex items-center gap-1">
                    <label htmlFor="description" className="font-semibold min-w-[120px] text-right">
                        Description
                    </label>
                    <input 
                        type="text"
                        id="description"
                        name="description"
                        placeholder="Description"
                        className="flex-1 rounded-xl bg-gray-200 px-3 py-2"
                        value={formData.description}
                        onChange={handleChange}
                    />
                    </div>
                )}

                {/* Role */}
                {errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
                <div className="flex items-center gap-1">
                    <label htmlFor="role" className="font-semibold min-w-[120px] text-right">
                        Role
                    </label>
                    <input 
                    type="text"
                    id="role"
                    name="role"
                    placeholder="Role"
                    className="flex-1 rounded-xl bg-gray-200 px-3 py-2"
                    value={formData.role}
                    onChange={handleChange}
                    />
                </div>

                {/* Submit button */}
                <div className="flex justify-end mt-2">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl mt-2 transition-colors">
                            {mode === "add" ? "Add User" : "Update User"}
                    </button>
                </div>
                
            </form>
        )
    }