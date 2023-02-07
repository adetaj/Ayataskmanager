import user from "../../../model/userdata";
import bcrypt from 'bcrypt'

//Registeruser
export const registerController = async(req,res)=>{
    const {firstname,lastname,email,password}=req.body;
    const findUser = await userdata.findOne({email});
    // check for user already registered
    try{
        
        if (founduser) {
        
        res.json({
            status: "error"
            data:" User already registered"
        });

    }else{
       
        //hash password
        const salt = await bcrypt.genSalt(10);
        const passwordhash = await bcrypt.hash(password, salt)
        const user = await userdata.create({
            firstname,
            lastname,
            email,
            password : passwordhash

        })
    }
}

    res.json({
        status: "sucess"
        data:"user"
    });

     }catch(error){
            res.json(error.message)
        }
    
      
        //User log in
        export  const loginController = async(req,res)=>{
       //Confirm the existence of user
       
            try{
                const foundUser = await userdata.findone({email});
                if(foundUser){
                    res.json({
                     status : "error"  
                     data: "User has been registered"
                    });
                }else{
                    const user = await userdata.create({
                        firstname,
                        lastname,
                        email,
                        password
                    })
                }
                res.json({
                    status: "success"
                    data:" User found"
                });
            }catch(error){
                    res.json(error.message)
                }

                export const createTask = async(req,res)=>{
                    try{
                        const task = await userdata.Create(req.body)
                        res.json({
                            status: "success"
                            data:" Task has been created"
                        });
                    }catch(error){
                            res.json(error.message)
                        }
                        
                    }

                  //Display all task
                    export const getAlltask = async(req,res)=>{
                        try{
                            const task = await userdata.find({})
                            res.json({
                                status: "success"
                                data:" All task display"
                            });
                        }catch(error){
                                res.json(error.message)
                            }
                            
                        }

                        export const getTask = async(req,res)=>{
                            try{
                                const{id:taskID}  = req.params
                                const task = await userdata.findone({_id : taskID});
                                if(!task)
                                res.json({
                                    status: "success"
                                    data:" No Task with this ID"
                                });
                            }catch(error){
                                    res.json(error.message)
                                }
                                
                            }

                           //updtae task
                            export const updateTask = async(req,res)=>{
                                try{
                                    const {id: taskID} = req.params
                                    const task = await userdata.findOneAndUpdate({_id taskID } , req.body,{
                                        new = true,
                                        runValidator: true,
                                    })
                                    if (!task){
                                        return res.status(404).json({ message : `No task with Id  ${taskID}`})
                                    }
                                    res.json({
                                        status: "success"
                                        data:" Task update successfully"
                                    });
                                }catch(error){
                                        res.json(error.message)
                                    }
                                    
                                }

                                //delete a particular task
                                export const delTask =async(req,res)=>{
                                    try{
                                        const { id: taskID} = req.params
                                        const task = await userdata.findoneanddelete({_id: taskID})
                                        if(!task){
                                            return(res.status(404)).json ({message : `no task with such id {taskID}`})
                                        }
                                        res.json({
                                            status: "success"
                                            data:" Task delete successfully"
                                        });
                                    }catch(error){
                                            res.json(error.message)
                                        }                                         
                                    }

