import React from "react";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode
}

const Modal = ({isVisible, onClose, children}: ModalProps) => {
    if(!isVisible) return null;

    const handleClose = (e: any) =>{
        if(e.target.id === 'wrapper') onClose(); 
    }
    
    return(
        <div className="fixed z-20 inset-0 bg-black/20 backdrop-blur-sm 
        flex justify-center items-center" id="wrapper" onClick={handleClose}>
            <div className=" flex flex-col" onClick={(e) => e.stopPropagation()}>
               
                <div className=" bg-white rounded-xl p-10 ">             
                    {children}        
                </div>
            </div>
        </div>
    )
}

export default Modal