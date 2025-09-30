import express from "express";
import cors from "cors";
import accountsRouter from "./routes/accountsRouter.js";
import menuRouter from "./routes/menuRouter.js";
import salesRouter from "./routes/salesRouter.js"
import cookieParser from "cookie-parser";
import session from "express-session";
 
const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.get("/api/home", (req, res) => {
    res.json({message: "Hello World!"});
})

app.use("/api", accountsRouter);
app.use("/api", menuRouter);
app.use("/api", salesRouter);

export default app;