import mongoose from "mongoose";

const commentSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    onModel:{
        type:String,
        required:true,
        enum:['tweet','comment']
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
             ref:'Comment'
        }
    ],
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Like'
        }
    ]
})

const Comment=mongoose.model("Comment",commentSchema);
export default Comment;