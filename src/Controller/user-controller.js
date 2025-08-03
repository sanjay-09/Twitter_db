import {UserService} from "../Service/index.js"
const userService=new UserService();


const create=async(req,res)=>{
    try{
        console.log(req.body);
        const data=await userService.create(req.body);
        return res.status(201).json({
            data:data,
            status:true,
            message:"user is successfully created",
            err:{}
        })


    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            data:{},
            status:false,
            message:"user is not able to create",
            err:err
        })

    }
}

export{
    create
}