import mongoose from "mongoose";

const hashTagSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    tweets:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tweet'
    }]
},{timestamps:true});

const HashTag=mongoose.model('HashTag',hashTagSchema);
export default HashTag;