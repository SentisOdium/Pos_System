import express from "express";
import cors from "cors";
import accountsRouter from "./routes/accountsRouter.js";
import menuRouter from "./routes/menuRouter.js";
import cookieParser from "cookie-parser";

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
export default app;