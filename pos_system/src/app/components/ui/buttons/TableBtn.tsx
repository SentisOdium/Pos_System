"use client";

import React,{ useState } from "react";
import { DeleteUser, DeleteMenu } from "../../helperFunctions/DeleteAction";
import {  toast } from "react-toastify";
import { RiAddCircleLine, RiAlertFill, RiDeleteBin2Fill, RiEditFill } from "react-icons/ri";
import Modal from "../modal/Modal";
import UserForms from "../forms/AccountForms";
import MenuForms from "../forms/MenuForms";

type TableBtnProps = {
    fetchData: () => void;
    mode: "menu" | "account";
    onsuccess?: () => void;
}

type BtnPropsWithId = TableBtnProps & {
    id: string;
};

export const DeleteBtn = ({id, fetchData, mode, onsuccess}: BtnPropsWithId) => {

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

            <Modal isVisible={showModal} onClose={() => setShowModal(false)} mode="delete">
                 <div>
                    <div className="flex flex-col items-center justify-center text-center">
                        <RiAlertFill  className="text-5xl text-red-600"/>
                        <h2 className="text-3xl mb-4 font-bold flex">Confirm Delete </h2>
                        <p className="text-xl">Are you sure you want to delete this {mode === "menu" ? "Item on the Menu?" : "User?"}</p>
                    </div>
                    <div className="mt-5 flex justify-between">
                        <button onClick={handleDelete} disabled={loading}  className=" hover:bg-red-700 px-5 hover:text-white
                            py-2 text-xl text-red-600 rounded-4xl font-bold">
                                {loading ? "Deleting..." : "Confirm"}
                        </button>  

                        <button onClick={() => setShowModal(false)} className=" bg-gray-400 px-5 text-white
                            py-2 text-xl rounded-4xl font-bold">
                                Cancel
                        </button>                         

                    </div>

                    
                 </div>
            </Modal>
            
        </>
    )
}

export const AddBtn = ({fetchData, mode}: TableBtnProps) => {
    const [showModal, setShowModal] = useState(false);
    
    return(
        <>
            <button className={`bg-blue-600 hover:bg-blue-700" px-5 py-1 rounded-4xl m-1 text-white flex items-center mr-2 cursor-pointer`} 
                onClick={() => setShowModal(true)}>
                <RiAddCircleLine /> Add
            </button>

            <Modal isVisible={showModal} onClose={() => setShowModal(false)} mode="updateAdd">
              {(() => {
                    if(mode === "account"){
                        return <UserForms mode="add" onSuccess={() => setShowModal(false)}/>;
                    }else if(mode === "menu"){
                        return <MenuForms mode="add" onSuccess={() => setShowModal(false)}/>;
                    }else{
                        return <div>Invalid mode {toast.error("Invalid mode")}</div>
                    }
                })()}
            </Modal>

        </>
    )
}; 

export const UpdateBtn = ({id, fetchData, mode}: BtnPropsWithId) => {
    const [showModal, setShowModal] = useState(false);
    
    return(
        <>
            <button className={`bg-yellow-400 hover:bg-yellow-500 px-5 py-1 rounded-4xl m-1 text-white flex items-center mr-2 cursor-pointer`} 
                onClick={() => setShowModal(true)}>
                    <RiEditFill />   Update
            </button>

            <Modal isVisible={showModal} onClose={() => setShowModal(false)} mode="updateAdd">
              {(() => {
                    if(mode === "account"){
                        return <UserForms mode="update" id={id} fetchData={fetchData} onSuccess={() => setShowModal(false)}/>;
                    }else if(mode === "menu"){
                        return <MenuForms mode="update" id={id} fetchData={fetchData} onSuccess={() => setShowModal(false)}/>;
                    }else{
                        return <div>Invalid mode {toast.error("Invalid mode")}</div>
                    }
                })()}
            </Modal>
        </>
    )
}
