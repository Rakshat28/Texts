import express from 'express';
import authRoutes from "./routes/auth.route.js";

const app = express();
const PORT = 5001;

app.use("/api/auth",authRoutes);

app.listen(PORT,()=>{
    console.log(`The server is running on port : ${PORT}`);
})