import express from 'express';
import dotenv from 'dotenv';
import {dbConnect} from "./config/dbConnect.js";
import taskRouters from ./routes/userRouter.js;
dotenv.config();
dbConnect()

const app = express();

//routes

app.use(express.json());

app.use("/api/users",taskRouters);

// app.post();
   
// app.post();

// app.post();

// app.get();

// app.get();

// app.update();

// app.delete();




const PORT = process.env.PORT||9000; 
app.listen(PORT, console.log(`Server is running at ${PORT}`))