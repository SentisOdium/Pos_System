    export default function AddUserForms(){
        return(
        <form>
            <input 
                type="text"
                name="name" 
                placeholder="Name" 
                className="input-field"/>

            <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                className="input-field"/>

            <input 
                type="text" 
                name="contactNo" 
                placeholder="Contact No." 
                className="input-field"/>

            <input 
                type="password" 
                name="password" 
                placeholder="Password" 
                className="input-field"/>

            <input 
                type="text" 
                name="description" 
                placeholder="Description" 
                className="input-field"/>

            <input 
                type="text" 
                name="role" 
                placeholder="Role" 
                className="input-field"/>
        </form>
        )
    }