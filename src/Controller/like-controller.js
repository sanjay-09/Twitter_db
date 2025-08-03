import {LikeService} from "../Service/index.js"
const likeService=new LikeService();


const toggleLike=async(req,res)=>{
    try{
        
        const data=await likeService.toggleLike(req.query.model_id,req.query.model_type,req.body.userId);
        return res.status(201).json({
            data:data,
            status:true,
            message:"operation was successful",
            err:{}
        })


    }
    catch(err){
        return res.status(500).json({
            data:{},
            status:false,
            message:"operation was unsuccessful",
            err:{}
        })
    }
}

export {
    toggleLike
    
}