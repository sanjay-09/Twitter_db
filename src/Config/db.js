import mongoose from "mongoose";
import { mongo_db_server_url } from "./serverConfig/index.js";

const connect=async()=>{
    await mongoose.connect(mongo_db_server_url)



}

export default connect;