import { useState } from "react";
import Modal from "../modal/Modal"
import { CheckoutNavProps } from "../checkout/checkoutNav";
type CheckoutBtnProps = CheckoutNavProps & {

}
export default function CheckoutBtn ({cart, setCart}: CheckoutBtnProps){
     const [showModal, setShowModal] = useState(false);
        const [loading, setLoading] = useState(false);
    return(
        <>
            <button
               onClick={() => setShowModal(true)}
                className="bg-yellow-500 hover:bg-yellow-600 px-6 m-1 text-gray-900 font-bold py-2 rounded mt-4 w-full">
                    Checkout Order                             
            </button>

            <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
                <div>
                    <div >
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder="Enter your Name"className=" rounded-lg border px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
                        <label htmlFor="address">Address</label>
                        <input type="text" name="Address" placeholder="Enter your Address"className=" rounded-lg border px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-400"/>

                    </div>
                </div>
            </Modal>
        </>
    )
}