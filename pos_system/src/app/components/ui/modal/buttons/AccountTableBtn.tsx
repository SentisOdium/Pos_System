import { useState } from "react";
import Modal from "../Modal";
import { RiEditFill, RiAddCircleLine  } from "react-icons/ri";
import UserForms from "../forms/AccountForms";

export const UpdateBtn = ({id, fetchData}: { id: string; fetchData: () => void}) => {
    const [showModal, setShowModal] = useState(false);


    return(
        <>  
        
            <button className="bg-yellow-400 hover:bg-yellow-500 px-5 py-1 rounded-4xl m-1 text-white
            flex items-center mr-2 cursor-pointer" onClick={() => setShowModal(true)}>
              <RiEditFill /> Update  
            </button>

            <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
                <UserForms 
                mode="update" 
                userId={id}
                onSuccess={() => {
                    fetchData();
                    setShowModal(false);
                }} />
            </Modal>

        </>
    )
}

export const AddUser = () =>{
        const [showModal, setShowModal] = useState(false);

    return(
        <div>
            <button className="bg-blue-600 hover:bg-blue-700 px-5 py-1 rounded-4xl m-1 
            text-white flex items-center mr-2 cursor-pointer" onClick={() => setShowModal(true)}>
                    <RiAddCircleLine />   Add 
            </button>

            <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
                <UserForms 
                mode="add" 
                onSuccess={() => {
                    setShowModal(false);
                }} />
            </Modal>
        </div>
    )
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