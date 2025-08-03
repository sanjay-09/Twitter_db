import {CommentService} from "../Service/index.js"
const commentService=new CommentService();

const create=async(req,res)=>{
    try{
        const data=await commentService.createComment(req.query.model_id,req.query.model_type,req.body.user,req.body.content);
        return res.status(201).json({
            data:{},
            status:true,
            message:"created the comment",
            err:{}
        })

    }
    catch(err){
        return res.status(500).json({
            data:{},
            status:false,
            message:"Not able to create the comment",
            err:{}

        })
    }
}

export {
    create
}