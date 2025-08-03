import { TweetService } from "../Service/index.js";

const tweetService=new TweetService();
const create=async(req,res)=>{
    try{

        const data=await tweetService.create(req.body);
        return res.status(201).json({
            data:data,
            status:true,
            message:"Tweet created successfully",
            err:{}

        })

    }
    catch(err){
        return res.status(500).json({
            data:{},
            status:false,
            message:"error in creating the tweeet",
            err:{}
        })

    }
    
}

const get=async(req,res)=>{
    try{
        const data=await tweetService.getWithComment(req.params.id);
        return res.status(200).json({
            data:data,
            status:true,
            message:"Successfully fetched the tweet",
            err:{}
        })
   

    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            data:{},
            status:false,
            messasge:"not able to get the tweet",
            err:err
        })
    }
}
export {
    create,
    get
}
