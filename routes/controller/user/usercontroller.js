import user from "../../../model/userdata";
export const registerController = async(req,res)=>{
    const {firstname,lastname,email,password}=req.body;
    try{
        const findUser = await user,findOne({email});
        res.json({
            status: "success"
            data:" your details have been saved"
        });
     }catch(error){
            res.json(error.message)
        })

        
       export  const loginController = async(req,res)=>{
       
            try{
                res.json({
                    status: "success"
                    data:" your details have been saved"
                });
            }catch(error){
                    res.json(error.message)
                }

                export const createUser = async(req,res)=>{
                    try{
                        res.json({
                            status: "success"
                            data:" Task has been created"
                        });
                    }catch(error){
                            res.json(error.message)
                        }
                        
                    }

                   export const getAlltask = async(req,res)=>{
                        try{
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
                                res.json({
                                    status: "success"
                                    data:" Task display successfully"
                                });
                            }catch(error){
                                    res.json(error.message)
                                }
                                
                            }

                            export const updateTask = async(req,res)=>{
                                try{
                                    res.json({
                                        status: "success"
                                        data:" Task update successfully"
                                    });
                                }catch(error){
                                        res.json(error.message)
                                    }
                                    
                                }

                                export const delTask =async(req,res)=>{
                                    try{
                                        res.json({
                                            status: "success"
                                            data:" Task delete successfully"
                                        });
                                    }catch(error){
                                            res.json(error.message)
                                        }
                                        
                                    }

