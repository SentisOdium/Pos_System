import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
export default function RedirectLoginBtn(){
    const router = useRouter();

    function handleClick (){
        toast.warning("Please Login / Register first to order!");
        router.replace("auth/login");
    }
    return(
        <button
            onClick={handleClick}
            className="bg-yellow-500 hover:bg-yellow-600 px-3 m-1 text-gray-900 font-bold py-2 rounded-full mt-4">
                Add to Cart!                              
        </button>
    )
}