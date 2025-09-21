import { useState } from "react";
import Modal from "../Modal";
import { DeleteMenu } from "../action/DeleteMenutAction";
import { RiDeleteBin2Fill,RiAlertFill , RiEditFill, RiAddCircleLine  } from "react-icons/ri";
import {  toast } from "react-toastify";
import MenuForms from "../forms/MenuForms";
import { set } from "zod";

export const CancelBtn = ({onClose}: {onClose: () => void}) =>{

    return(
        <button className="text-white bg-gray-400 hover:bg-gray-600 px-5 py-1 rounded-4xl m-1 
             flex items-center mr-2 cursor-pointer"
                            onClick={onClose}>
                                Cancel
        </button>   
    )
}

export const DeleteBtn = ({id, fetchData}: {id: string; fetchData: () => void}) => {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleDelete = async () => {
        setLoading(true);
        const success = await DeleteMenu(id);
        if(success) {
            toast.success("Menu Deleted Successfully");
            fetchData();
            setShowModal(false);
        } else {
            toast.error("Failed to Delete Menu");
        }
    }

    return(
        <div>
            
        </div>
    )
}
