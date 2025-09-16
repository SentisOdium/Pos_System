    "use client";
    
    import { useState, useContext, useEffect } from "react"
    import axios from "axios";
    type UserFormProps = {
        mode: "add" | "update";
        userId?: string;
        onSuccess?: () => void;
    }

    export default function UserForms({mode, userId, onSuccess} : UserFormProps){
        const [formData, setFormdata] = useState({
            name: "",
            email: "",
            contactNo: "",
            password: "",
            description: "",
            role: "",
        });
        
        useEffect(() => {
            if(mode === "update" && userId){
                const fetchUser = async () => {
                    try{
                        const res = await axios.get(`http://localhost:5000/api/accounts/${userId}`, {withCredentials: true}); 
setFormdata({
  name: res.data.name ?? "",
  email: res.data.email ?? "",
  contactNo: res.data.contactNo ?? "",
  password: res.data.password ?? "",
  description: res.data.description ?? "",
  role: res.data.role ?? "",
});
                    }catch(err){
                        console.error("Error Fetching User: ", err);
                    }
                };
                fetchUser();
            }
        },[mode, userId])

        const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormdata({ ...formData, [e.target.name]: e.target.value});
        };

        const handleSubmit = async (e: React.FormEvent) =>{
            e.preventDefault();

            try {
                if(mode === "add"){
                    await axios.post("http://localhost:5000/api/accounts", formData, {withCredentials: true});
                }else if(mode === "update"){
                    await axios.put(`http://localhost:5000/api/accounts/${userId}`, formData, {withCredentials: true})
                }else{
                    alert("Fallback");
                }

                    if (onSuccess) onSuccess();

            } catch (err) {
                console.error("Error in submitting Form", err);
            }
        };

        return(
        <form onSubmit={handleSubmit}className="flex flex-col gap-2">
            <input 
                type="text"
                name="name" 
                placeholder="Name" 
                className="input-field"
                value={formData.name}
                onChange={handleChange}
                />

            <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                className="input-field"
                value={formData.email}
                onChange={handleChange}/>

            <input 
                type="text" 
                name="contactNo" 
                placeholder="Contact No." 
                className="input-field"
                value={formData.contactNo}
                onChange={handleChange}/>

            <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                className="input-field"
                value={formData.password}
                onChange={handleChange}/>

            <input 
                type="text" 
                name="description" 
                placeholder="Description" 
                className="input-field"
                value={formData.description}
                onChange={handleChange}/>

            <input 
                type="text" 
                name="role" 
                placeholder="Role" 
                className="input-field"
                value={formData.role}
                onChange={handleChange}/>


            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                    {mode === "add" ? "Add User" : "Update User"}
            </button>
        </form>
        )
    }