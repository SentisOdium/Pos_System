"use client";
    
import { useState, useEffect } from "react"
import axios from "axios";
import { MenuFormSchema } from "@/lib/defenitions";
import { toast } from "react-toastify";
import { FormProps } from "@/app/components/common/userObject";

export default function MenuForms({mode, id, onSuccess, fetchData} : FormProps){
    const [errors, setErrors ] = useState<{[key: string]: string}>({});
    const [formData, setFormdata] = useState({
        sku: "",
        item: "",
        category: "",
        quantity: "",
        price: "",
        description: "",
        url: "",
    });

    useEffect(() => {
        if(mode === "update" && id){
            const fetchMenu = async () => {
                try{
                    const res = await axios.get(`http://localhost:5000/api/menu/${id}`, {withCredentials: true}); 
                    setFormdata({
                        sku: res.data.sku ?? "",
                        item: res.data.item ?? "",
                        category: res.data.category ?? "",
                        quantity: res.data.quantity ?? "",
                        price: res.data.price ?? "",
                        description: res.data.description ?? "",
                        url: res.data.url ?? "",
                    });
                }catch (error) {
                    toast.error("Error Fetching Menu Data");
                    console.error("Error fetching menu data:", error);
                }
            };
            fetchMenu();
        }
    }, [mode, id]);

     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormdata({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: React.FormEvent) =>{
        e.preventDefault();

        const menuValidation = MenuFormSchema.safeParse(formData);

        if(!menuValidation.success){
            const fieldErrors: {[key: string]: string} = {};

            menuValidation.error.issues.forEach((err: any) =>{
                if (err.path[0]) fieldErrors[err.path[0].toString()] = err.message; 
            });

            setErrors(fieldErrors);
                return;
        }

        setErrors({});

        try{
            if(mode === "add"){
                await axios.post (`http://localhost:5000/api/menu`,
                    formData, {withCredentials: true});
                    setFormdata({
                        sku: "", 
                        item: "", 
                        category: "", 
                        quantity: "", 
                        price: "", 
                        description: "", 
                        url: ""
                    });
                    toast.success("Item Menu Added Successfully!");
            }else if (mode === "update"){
                await axios.put(`http://localhost:5000/api/menu/${id}`,
                    formData, {withCredentials: true}); 
                toast.success("Item Menu Updated Successfully!");
            }else{
                console.error("Invalid mode");
                toast.error("Invalid mode");
                return;
            }

            if (fetchData) fetchData();
            if (onSuccess) onSuccess();
               

        }catch (err){
            console.error("Error in submitting Form", err);
            toast.error("Failed to Submit Form!");
        }
    }


    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

            {/* SKU */}
            {errors.sku && <p className="text-red-500 text-sm">{errors.sku}</p>}
            <div className="flex items-center gap-2">
                <label htmlFor="sku" className="font-semibold min-w-[120px] text-right">
                SKU
                </label>
                <input
                type="number"
                id="sku"
                name="sku"
                placeholder="Enter SKU"
                className="flex-1 rounded-xl bg-gray-200 px-3 py-2"
                value={formData.sku}
                onChange={handleChange}
                />
            </div>

            {/* Item */}
            {errors.item && <p className="text-red-500 text-sm">{errors.item}</p>}
            <div className="flex items-center gap-2">
                <label htmlFor="item" className="font-semibold min-w-[120px] text-right">
                Item
                </label>
                <input
                type="text"
                id="item"
                name="item"
                placeholder="Enter item"
                className="flex-1 rounded-xl bg-gray-200 px-3 py-2"
                value={formData.item}
                onChange={handleChange}
                />
            </div>

            {/* Category */}
            {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
            <div className="flex items-center gap-2">
                <label htmlFor="category" className="font-semibold min-w-[120px] text-right">
                Category
                </label>
                <input
                type="text"
                id="category"
                name="category"
                placeholder="Enter category"
                className="flex-1 rounded-xl bg-gray-200 px-3 py-2"
                value={formData.category}
                onChange={handleChange}
                />
            </div>

            {/* Quantity */}
            {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity}</p>}
            <div className="flex items-center gap-2">
                <label htmlFor="quantity" className="font-semibold min-w-[120px] text-right">
                Quantity
                </label>
                <input
                type="number"
                id="quantity"
                name="quantity"
                placeholder="Enter quantity"
                className="flex-1 rounded-xl bg-gray-200 px-3 py-2"
                value={formData.quantity}
                onChange={handleChange}
                />
            </div>

            {/* Price */}
            {errors.price && <p className="text-red-500 text-sm">{errors.price}</p>}
            <div className="flex items-center gap-2">
                <label htmlFor="price" className="font-semibold min-w-[120px] text-right">
                Price
                </label>
                <input
                type="number"
                id="price"
                name="price"
                placeholder="Enter price"
                className="flex-1 rounded-xl bg-gray-200 px-3 py-2"
                value={formData.price}
                onChange={handleChange}
                />
            </div>

            {/* Description */}
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
            <div className="flex items-center gap-2">
                <label htmlFor="description" className="font-semibold min-w-[120px] text-right">
                Description
                </label>
                <input
                type="text"
                id="description"
                name="description"
                placeholder="Enter description"
                className="flex-1 rounded-xl bg-gray-200 px-3 py-2"
                value={formData.description}
                onChange={handleChange}
                />
            </div>

            {/* Image URL */}
            {errors.url && <p className="text-red-500 text-sm">{errors.url}</p>}
            <div className="flex items-center gap-2">
                <label htmlFor="url" className="font-semibold min-w-[120px] text-right">
                Image URL
                </label>
                <input
                type="text"
                id="url"
                name="url"
                placeholder="Enter image URL"
                className="flex-1 rounded-xl bg-gray-200 px-3 py-2"
                value={formData.url}
                onChange={handleChange}
                />
            </div>

            {/* Submit */}
            <div className="flex justify-end mt-2">
                <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition-colors"
                >
                {mode === "add" ? "Add Menu Item" : "Update Menu Item"}
                </button>
            </div>
        </form>
    )
}