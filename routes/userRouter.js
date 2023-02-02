import esxpress from "express"
import {createUser,getAlltask,getTask,updateTask,delTasklogingController,registerController} from '../controller/user/usercontroller.js';
import user from "../model/userdata";

const taskRouters = express.Router();
//register user
taskRouters.post("register/", registerController);

//login
taskRouters.post("/login/",loginController);

//create task
taskRouters.post("/createtask/",createUser);

//get all task
taskRouters.get("/getalltask/",getAlltask);

//get task by id
taskRouters.get("/gettask/:id/",getTask );

//Update task by id
taskRouters.put("/gettask/:id/",updateTask);

//Delete  task
taskRouters.delete("/gettask/:id/",delTask );

export default taskRouters;


