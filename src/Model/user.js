import mongoose from "mongoose";
import bcrypt from "bcrypt"
import { SALT_ROUND } from "../Config/serverConfig.js";

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
},{timestamps:true});

userSchema.pre('save',function(next){
const salt = bcrypt.genSaltSync(SALT_ROUND);
const hash = bcrypt.hashSync(this.password, salt);
this.password=hash;
next();
})

const User=mongoose.model("User",userSchema);
export default User;