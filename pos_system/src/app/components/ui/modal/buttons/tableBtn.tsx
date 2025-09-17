import { useState, useContext } from "react";
import Modal from "../Modal";
import { DeleteUser} from "../action/userActions";
import { RiDeleteBin2Fill,RiAlertFill , RiEditFill, RiAddCircleLine  } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import { TableUserContext } from "@/app/(pages)/(protectedPages)/userTable/UserContext";
import UserForms from "../forms/addForms";
import { userObject } from "@/app/components/common/userObject";

export const  DeleteBtn = ({ id}: { id: string}) => {
    
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const { fetchUsers } = useContext(TableUserContext)!;

    const handleDelete = async () => {
        setLoading(true);
        const success = await DeleteUser(id);
        setLoading(false);

        if(success){
            setShowModal(false);
            toast.success("User Deleted!");
            fetchUsers();
        }else{
            toast.error("failed to Delete User!");
        }
    };

    return(
        <>
            <button className="bg-red-600 hover:bg-red-700 px-5 py-1 rounded-4xl m-1 
            text-white flex items-center mr-2 cursor-pointer" onClick={() => setShowModal(true)}>
                    <RiDeleteBin2Fill />   Delete 
            </button>

            <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
                <div >
                    <div className="flex flex-col items-center justify-center text-center">
                        <RiAlertFill  className="text-5xl text-red-600"/>
                        <h2 className="text-3xl mb-4 font-bold flex">Confirm Delete </h2>
                        <p className="text-xl">Are you sure you want to delete this user?</p>
    
                    </div>
                   
                    <div className="mt-5 flex abosulute bottom-10">
                    
                        <button onClick={handleDelete} disabled={loading}  className="bg-red-600 hover:bg-red-700 px-3
                            py-2 text-xl text-white rounded-4xl">
                                {loading ? "Deleting..." : "Yes, Delete"}
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export const UpdateBtn = ({ id}: { id: string}) => {
    const [showModal, setShowModal] = useState(false);
    const { fetchUsers } = useContext(TableUserContext)!;

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
                    fetchUsers();
                    setShowModal(false);
                }} />
            </Modal>

        </>
    )
}

export const AddUser = () =>{
        const [showModal, setShowModal] = useState(false);
        const { fetchUsers } = useContext(TableUserContext)!;

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
                    fetchUsers();
                    setShowModal(false);
                }} />
            </Modal>
        </div>
    )
} 