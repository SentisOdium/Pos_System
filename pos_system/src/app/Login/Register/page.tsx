import "../login.css";
export default function Register(){
    return(
        <div className="form-container">
            <form action="">
                <div>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Name"
                        className="input"
                        />
                </div>
                <div>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Email"
                        className="input"
                        />
                </div>
                <div>
                    <input 
                        type="text" 
                        id="number" 
                        name="number" 
                        placeholder="Number"
                        className="input"
                        />
                </div>
                <div>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Password"
                        className="input" 
                        />
                </div>

                <button className="btn btn-red">Sign-In</button>
            </form>
        </div>
    )
}