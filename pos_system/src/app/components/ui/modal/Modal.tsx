import React from "react";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode
  mode?: "delete" | "updateAdd";
}

const Modal = ({isVisible, onClose, children, mode}: ModalProps) => {
    if(!isVisible) return null;

    const handleClose = (e: any) =>{
        if(e.target.id === 'wrapper') onClose(); 
    }
    
    return(
        <div className="fixed z-20 inset-0 bg-black/20 backdrop-blur-sm 
        flex justify-center items-center" id="wrapper" onClick={handleClose}>
            <div className=" flex flex-col" onClick={(e) => e.stopPropagation()}>
               
                <div className=" bg-white rounded-xl p-2 "> 
                    {mode !== "delete" && (<div className="flex items-end justify-end mr-2">
                        <button className="text-black hover:text-gray-700"
                            onClick={()=> onClose()}>x
                        </button>     
                    </div>)} 
                        
                    <div className="p-4">
                        {children}    
                    </div>
                            
                </div>
            </div>
        </div>
    )
}

export default Modal
