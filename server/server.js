import express from "express";
import dotenv from 'dotenv';
import connectDB from "./config/db.js"
import cros from "cors"
import router from "./routes/todoRoutes.js";


dotenv.config();

const app = express();

app.use(express.json())


connectDB();


// app.get("/", (req, res) => res.send("<h1>Server running</h1>"));

app.use(cros())


app.use("/",router)

// setting up port
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server running http://localhost:${PORT}`);
});
