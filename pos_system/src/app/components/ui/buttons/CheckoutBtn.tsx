import { useState } from "react";
import Modal from "../modal/Modal"

export default function CheckoutBtn (){
     const [showModal, setShowModal] = useState(false);
        const [loading, setLoading] = useState(false);
    return(
        <>
            <button
                // onClick={() => handleClearCart()}
                className="bg-yellow-500 hover:bg-yellow-600 px-6 m-1 text-gray-900 font-bold py-2 rounded mt-4 w-full">
                    Checkout Order                             
            </button>

            <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
                <h1>
                    
                </h1>
            </Modal>
        </>
    )
}