export default function Register(){
    return(
        <div>
            <form action="">
                <div>
                    <span><label htmlFor="">Name</label></span>
                    <input type="text" id="name" name="name"/>
                </div>
                <div>
                    <span><label htmlFor="">Email</label></span>
                    <input type="email" />
                </div>
                <div>
                    <span><label htmlFor="">Contact No.</label></span>
                    <input type="number" />
                </div>
                <div>
                    <span><label htmlFor="">Password</label></span>
                    <input type="password" />
                </div>
            </form>
        </div>
    )
}