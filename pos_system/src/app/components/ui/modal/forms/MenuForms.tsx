"use client";
    
import { useState, useEffect } from "react"
import axios from "axios";
import { MenuFormSchema } from "@/lib/defenitions";
import { ToastContainer, toast } from "react-toastify";

type UserFormProps = {
    mode: "add" | "update";
    userId?: string;
    onSuccess?: () => void;
}

export default function MenuForms({mode, userId, onSuccess} : UserFormProps){
    const [errors, setErrors] = useState<{[key: string]: string}>({})
    const [formData, setFormdata] = useState({
        sku: "",
        item: "",
        category: "",
        quantity: 0,
        price: 0,
        description: "",
    });
        
    useEffect(() => {
        if(mode === "update" && userId){
            const fetchUser = async () => {
                try{
                    const res = await axios.get(`http://localhost:5000/api/menu/${userId}`, {withCredentials: true}); 
                    setFormdata({
                        sku: res.data.sku ?? "",
                        item: res.data.item ?? "",
                        category: res.data.category ?? "",
                        quantity: res.data.quantity ?? 0,
                        price: res.data.price ?? 0,
                        description: res.data.description ?? "",
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

    console.log("Form data:", formData);
    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault();

        const menuValidation = MenuFormSchema.safeParse(formData);

        if(!menuValidation.success){
            console.log("Validation failed:", menuValidation.error.issues);
            const fieldErrors: {[key: string]: string} = {};

            menuValidation.error.issues.forEach((err: any) =>{
                if (err.path[0]) fieldErrors[err.path[0].toString()] = err.message; 
            });

            setErrors(fieldErrors);
                return;
            }
            

            setErrors({});

            try {
                if(mode === "add"){
                    await axios.post("http://localhost:5000/api/menu", formData, {withCredentials: true});
                    toast.success("User Added Successfully!");
                }else if(mode === "update"){
                    await axios.put(`http://localhost:5000/api/menu/${userId}`, formData, {withCredentials: true});
                    toast.success("User Updated Successfully!");
                }else{
                    alert("Fallback");
                }

                if (onSuccess) onSuccess();

            } catch (err) {
                console.error("Error in submitting Form", err);
                toast.error("Failed to Submit Form!");
            }
        };

        return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            {errors.sku && (<p className="ml-7 text-red-500 text-sm -mb-3">{errors.sku}</p>)}
            <input
                type="text"
                name="sku"
                placeholder="SKU"
                className="rounded-4xl bg-gray-200 p-2 m-1"
                value={formData.sku}
                onChange={handleChange}
            />

            {errors.item && (<p className="ml-7 text-red-500 text-sm -mb-3">{errors.item}</p>)}
            <input
                type="text"
                name="item"
                placeholder="Item"
                className="rounded-4xl bg-gray-200 p-2 m-1"
                value={formData.item}
                onChange={handleChange}
            />

            {errors.category && (<p className="ml-7 text-red-500 text-sm -mb-3">{errors.category}</p>)}
            <input
                type="text"
                name="category"
                placeholder="Category"
                className="rounded-4xl bg-gray-200 p-2 m-1"
                value={formData.category}
                onChange={handleChange}
            />

            {errors.quantity && (<p className="ml-7 text-red-500 text-sm -mb-3">{errors.quantity}</p>)}
            <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                className="rounded-4xl bg-gray-200 p-2 m-1"
                value={formData.quantity}
                onChange={handleChange}
            />

            {errors.price && (<p className="ml-7 text-red-500 text-sm -mb-3">{errors.price}</p>)}
            <input
                type="text"
                step="0.01"
                name="price"
                placeholder="Price"
                className="rounded-4xl bg-gray-200 p-2 m-1"
                value={formData.price}
                onChange={handleChange}
            />

            {errors.description && (<p className="ml-7 text-red-500 text-sm -mb-3">{errors.description}</p>)}
            <input
                type="text"
                name="description"
                placeholder="Description"
                className="rounded-4xl bg-gray-200 p-2 m-1"
                value={formData.description}
                onChange={handleChange}
            />

            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-4xl"
            >
                {mode === "add" ? "Add Menu" : "Update Menu"}
            </button>
        </form>

        )
    }