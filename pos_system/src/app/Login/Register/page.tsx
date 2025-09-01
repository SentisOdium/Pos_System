import "../login.css";
export default function Register(){
    return(
        <div className="form-container">
            <form action="">
                <div>
                    <span><label htmlFor="">Name</label></span>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Name"
                        className="input"
                        />
                </div>
                <div>
                    <span><label htmlFor="">Email</label></span>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Email"
                        className="input"
                        />
                </div>
                <div>
                    <span><label htmlFor="">Contact No.</label></span>
                    <input 
                        type="text" 
                        id="number" 
                        name="number" 
                        placeholder="Number"
                        className="input"
                        />
                </div>
                <div>
                    <span><label htmlFor="">Password</label></span>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Password"
                        className="input" 
                        />
                </div>
            </form>
        </div>
    )
}