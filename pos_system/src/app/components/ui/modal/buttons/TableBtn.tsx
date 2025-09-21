"use client";

import React,{useEffect, useState} from "react";
import { DeleteUser, DeleteMenu } from "../action/DeleteAction";
import {  toast } from "react-toastify";
import { RiAddCircleLine, RiAlertFill, RiDeleteBin2Fill, RiEditFill } from "react-icons/ri";
import Modal from "../Modal";
import UserForms from "../forms/AccountForms";
import MenuForms from "../forms/MenuForms";

type TableBtnProps = {
    id: string;
    fetchData: () => void;
    mode: "menu" | "account";
    onsuccess?: () => void;
}

type AddUpdateBtnProps = {
    formMode: "add" | "update";
}

type CombinedTableBtnProps = TableBtnProps & AddUpdateBtnProps;

export const CancelBtn = ({onClose}: {onClose: () => void}) =>{
    return(
        <button className="bg-gray-400 hover:bg-gray-500 px-5 py-2 rounded-4xl m-1 
            text-white flex items-center mr-2 cursor-pointer text-2xl" onClick={onClose}>
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
                        <button onClick={handleDelete} disabled={loading}  className=" hover:bg-red-700 px-5 hover:text-white
                            py-2 text-2xl text-red-600 rounded-4xl font-bold">
                                {loading ? "Deleting..." : "Confirm"}
                        </button>
                        <CancelBtn onClose={() => setShowModal(false)}/>
                            
                    </div>
                
                 </div>
            </Modal>
            
        </>
    )
}

export const AddUpdateBtn = ({id, fetchData, formMode, mode}: CombinedTableBtnProps) => {

    const [showModal, setShowModal] = useState(false);

    return(
        <>
            <button className={`${formMode === "add" 
                                    ? "bg-blue-600 hover:bg-blue-700" 
                                    : "bg-yellow-400 hover:bg-yellow-500"} 
                                    px-5 py-1 rounded-4xl m-1 text-white flex items-center mr-2 cursor-pointer`}
                     onClick={() => setShowModal(true)}>
                        {mode ==="account" &&  formMode === "add"
                            ? <><RiAddCircleLine /> Add</>
                            : <><RiEditFill /> Update</>}
            </button>
            
            <Modal isVisible={showModal} onClose={() => setShowModal(false)}> 
               {(() => {
                    if(mode === "account" && formMode === "add") {
                        return <UserForms mode="add" onSuccess={() => {setShowModal(false);}}/>
                    }else if(mode === "account" && formMode === "update"){
                        return <UserForms mode="update" userId={id} onSuccess={() => {fetchData(); setShowModal(false);}}/>
                    }else if (formMode === "add") {
                        return <MenuForms mode="add" onSuccess={() => setShowModal(false)} />;
                    } else {
                        return <MenuForms mode="update" onSuccess={() => setShowModal(false)} />;
                    }
                })()}
            </Modal>
        </>
    )
}