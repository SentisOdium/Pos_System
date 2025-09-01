import express from "express";
import cors from "cors";
import accountsRouter from "./routes/accountsRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/home", (req, res) => {
    res.json({message: "Hello World!"});
})
app.use("/api", accountsRouter);
export default app;