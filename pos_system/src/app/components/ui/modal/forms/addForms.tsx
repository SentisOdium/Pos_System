    "use client";
    
import { useState, useEffect } from "react"
import axios from "axios";
import { UpdateFormSchema } from "@/lib/defenitions";

type UserFormProps = {
    mode: "add" | "update";
    userId?: string;
    onSuccess?: () => void;
}

export default function UserForms({mode, userId, onSuccess} : UserFormProps){
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
        if(mode === "update" && userId){
            const fetchUser = async () => {
                try{
                    const res = await axios.get(`http://localhost:5000/api/accounts/${userId}`, {withCredentials: true}); 
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
    },[mode, userId])

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
                    await axios.post("http://localhost:5000/api/accounts", formData, {withCredentials: true});
                }else if(mode === "update"){
                    await axios.put(`http://localhost:5000/api/accounts/${userId}`, formData, {withCredentials: true})
                }else{
                    alert("Fallback");
                }

                if (onSuccess) onSuccess();

            } catch (err) {
                console.error("Error in submitting Form", err);
            }
        };

        return(
        <form onSubmit={handleSubmit}className="flex flex-col gap-2">
            
            {errors.name && (<p className="ml-7 text-red-500 text-sm -mb-3">{errors.name}</p>)}
            <input 
                type="text"
                name="name" 
                placeholder="Name" 
                className="rounded-4xl bg-gray-200 p-2 m-1"
                value={formData.name}
                onChange={handleChange}/>
            
            {errors.email && (<p className="ml-7 text-red-500 text-sm -mb-3">{errors.email}</p>)}
            <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                className="rounded-4xl bg-gray-200 p-2 m-1"
                value={formData.email}
                onChange={handleChange}/>
            
            
            {mode === "update" && 
                (
                <>
                    {errors.contactNo && (<p className="ml-7 text-red-500 text-sm -mb-3">{errors.contactNo}</p>)}
                    <input 
                        type="text" 
                        name="contactNo" 
                        placeholder="Contact No." 
                        className={`rounded-4xl bg-gray-200 p-2 m-1 `}
                        value={formData.contactNo}
                        onChange={handleChange}/>
                </>
                )}
            
            {errors.password && (<p className="ml-7 text-red-500 text-sm -mb-3">{errors.password}</p>)}
            <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                className="rounded-4xl bg-gray-200 p-2 m-1"
                value={formData.password}
                onChange={handleChange}/>

            
            {mode === "update" &&
                (
                <>
                {errors.description && (<p className="ml-7 text-red-500 text-sm -mb-3">{errors.description}</p>)}
                <input 
                    type="text" 
                    name="description" 
                    placeholder="Description" 
                    className={`rounded-4xl bg-gray-200 p-2 m-1 `}
                    value={formData.description}
                    onChange={handleChange}/>
                </>
                )}
            
            {errors.role && (<p className="ml-7 -mb-3 text-red-500 text-sm ">{errors.role}</p>)}
            <input 
                type="text" 
                name="role" 
                placeholder="Role" 
                className="rounded-4xl bg-gray-200 p-2 m-1"
                value={formData.role}
                onChange={handleChange}/>

            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-4xl">
                    {mode === "add" ? "Add User" : "Update User"}
            </button>
        </form>
        )
    }