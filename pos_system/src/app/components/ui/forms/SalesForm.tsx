"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FormProps } from "../../common/userObject";
import { SalesFormSchema } from "@/lib/defenitions";

export default function SalesForms({ mode, id, onSuccess, fetchData }: FormProps) {
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [formData, setFormdata] = useState({
        name: "",
        address: "",
        orders: "",
        deliveryFee: "",
        subTotal: "",
        total: "",
    });

    // Fetch sales record if in update mode
    useEffect(() => {
        if (mode === "update" && id) {
            const fetchSales = async () => {
                try {
                    const res = await axios.get(`http://localhost:5000/api/sales/${id}`, { withCredentials: true });
                    setFormdata({
                        name: res.data.name ?? "",
                        address: res.data.address ?? "",
                        orders: res.data.orders ?? "",
                        deliveryFee: res.data.deliveryFee ?? "",
                        subTotal: res.data.subTotal ?? "",
                        total: res.data.total ?? "",
                    });
                } catch (error) {
                    toast.error("Error in fetching sales record");
                    console.error("Error in fetching sales record:", error);
                }
            };
            fetchSales();
        }
    }, [mode, id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormdata({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const salesValidation = SalesFormSchema.safeParse(formData);

        if (!salesValidation.success) {
            const fieldErrors: { [key: string]: string } = {};
            salesValidation.error.issues.forEach((err) => {
                if (err.path[0]) fieldErrors[err.path[0].toString()] = err.message;
            });
            setErrors(fieldErrors);
            return;
        }

        setErrors({});

        try {
            if (mode === "add") {
                await axios.post(`http://localhost:5000/api/sales`, formData, { withCredentials: true });
                setFormdata({
                    name: "",
                    address: "",
                    orders: "",
                    deliveryFee: "",
                    subTotal: "",
                    total: "",
                });
                toast.success("Record added successfully");
            } else if (mode === "update" && id) {
                await axios.put(`http://localhost:5000/api/sales/${id}`, formData, { withCredentials: true });
                toast.success("Record updated successfully");
            } else {
                console.error("Invalid mode!");
                toast.error("Invalid mode!");
                return;
            }

            if (fetchData) fetchData();
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Failed to submit form!");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            <div className="flex items-center gap-2">
                <label htmlFor="name" className="font-semibold min-w-[120px] text-right">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Name"
                    className="flex-1 rounded-xl bg-gray-200 px-3 py-2"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            {/* Address */}
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
            <div className="flex items-center gap-2">
                <label htmlFor="address" className="font-semibold min-w-[120px] text-right">Address</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Enter Address"
                    className="flex-1 rounded-xl bg-gray-200 px-3 py-2"
                    value={formData.address}
                    onChange={handleChange}
                />
            </div>

            {/* Orders */}
            {errors.orders && <p className="text-red-500 text-sm">{errors.orders}</p>}
            <div className="flex items-center gap-2">
                <label htmlFor="orders" className="font-semibold min-w-[120px] text-right">Orders</label>
                <input
                    type="text"
                    id="orders"
                    name="orders"
                    placeholder="Enter Orders / SKU"
                    className="flex-1 rounded-xl bg-gray-200 px-3 py-2"
                    value={formData.orders}
                    onChange={handleChange}
                />
            </div>

            {/* Delivery Fee */}
            {errors.deliveryFee && <p className="text-red-500 text-sm">{errors.deliveryFee}</p>}
            <div className="flex items-center gap-2">
                <label htmlFor="deliveryFee" className="font-semibold min-w-[120px] text-right">Delivery Fee</label>
                <input
                    type="number"
                    id="deliveryFee"
                    name="deliveryFee"
                    placeholder="Enter Delivery Fee"
                    className="flex-1 rounded-xl bg-gray-200 px-3 py-2"
                    value={formData.deliveryFee}
                    onChange={handleChange}
                />
            </div>

            {/* Subtotal */}
            {errors.subTotal && <p className="text-red-500 text-sm">{errors.subTotal}</p>}
            <div className="flex items-center gap-2">
                <label htmlFor="subTotal" className="font-semibold min-w-[120px] text-right">Subtotal</label>
                <input
                    type="number"
                    id="subTotal"
                    name="subTotal"
                    placeholder="Enter Subtotal"
                    className="flex-1 rounded-xl bg-gray-200 px-3 py-2"
                    value={formData.subTotal}
                    onChange={handleChange}
                />
            </div>

            {/* Total */}
            {errors.total && <p className="text-red-500 text-sm">{errors.total}</p>}
            <div className="flex items-center gap-2">
                <label htmlFor="total" className="font-semibold min-w-[120px] text-right">Total</label>
                <input
                    type="number"
                    id="total"
                    name="total"
                    placeholder="Enter Total"
                    className="flex-1 rounded-xl bg-gray-200 px-3 py-2"
                    value={formData.total}
                    onChange={handleChange}
                />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-2">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl transition-colors"
                >
                    {mode === "add" ? "Add Sales Record" : "Update Sales Record"}
                </button>
            </div>
        </form>
    );
}
