export async function LogoutController(req, res ){
    try {
        const isProduction = process.env.NODE_ENV === "production";
    
         res.clearCookie("token",{
            httpOnly: true,
            secure: isProduction,
            sameSite: "lax",
            path: "/",   
        });


        return res.json({ message: "Logout Successful!"});
    } catch (err) {
        console.error("Failed to Logout User!", err);
        return res.status(500).json({ error: "Failed to Logout!" });

    }
}
