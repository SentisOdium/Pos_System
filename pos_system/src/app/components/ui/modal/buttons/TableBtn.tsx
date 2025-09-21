"use client";

import React,{useEffect, useState} from "react";
import { DeleteUser, DeleteMenu } from "../action/DeleteAction";
import {  toast } from "react-toastify";
import { success } from "zod";
import { RiAlertFill, RiDeleteBin2Fill } from "react-icons/ri";
import Modal from "../Modal";
type TableBtnProps = {
    id: string;
    fetchData: () => void;
    mode: "menu" | "account";
    onsuccess?: () => void;
}

export const CancelBtn = ({onClose}: {onClose: () => void}) =>{
    return(
        <button className="text-white bg-gray-400 hover:bg-gray-600 px-5 py-1 rounded-4xl m-1 
             flex items-center mr-2 cursor-pointer"
                            onClick={onClose}>
                                Cancel
        </button>   
    )
}

export const DeleteBtn = ({id, fetchData, mode, onsuccess}: TableBtnProps) => {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        try {
       
            setLoading(true);

                let result = false;

                if(mode === "menu"){
                    result = await DeleteMenu(id);
                } else if(mode === "account"){
                    result = await DeleteUser(id);
                }else{
                    throw new Error("Invalid mode");
                }

            setLoading(false);
        
            if(result){
                setShowModal(false);
                toast.success(mode === "menu" 
                    ? "Menu deleted successfully!" 
                    : "User deleted successfully!");
                fetchData();
                if(onsuccess) onsuccess();
            }else{
                toast.error(mode === "menu" 
                    ? "Failed to delete menu!"
                    : "Failed to delete user!");
            }
        

        } catch (err) {
            toast.error("Failed to Delete Data!");
            console.error("Error in deleting data: ", err);
        }
    }

    return(
        <>
            <button className="bg-red-600 hover:bg-red-700 px-5 py-1 rounded-4xl m-1 
            text-white flex items-center mr-2 cursor-pointer" onClick={() => setShowModal(true)}>
                <RiDeleteBin2Fill />   Delete 
            </button>

            <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
                 <div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <RiAlertFill  className="text-5xl text-red-600"/>
                        <h2 className="text-3xl mb-4 font-bold flex">Confirm Delete </h2>
                        <p className="text-xl">Are you sure you want to delete this {mode === "menu" ? "Item on the Menu?" : "User?"}</p>
                    </div>
                    <div className="mt-5 flex justify-between">
                        <button onClick={handleDelete} disabled={loading}  className="bg-red-600 hover:bg-red-700 px-3
                            py-2 text-xl text-white rounded-4xl">
                                {loading ? "Deleting..." : "Yes, Delete"}
                        </button>
                        <CancelBtn onClose={() => setShowModal(false)}/>
                    </div>
                 </div>
            </Modal>
            
        </>
    )
}