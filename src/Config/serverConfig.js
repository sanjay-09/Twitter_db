import dotenv from "dotenv";
dotenv.config();

const PORT=process.env.PORT;
const mongo_db_server_url=process.env.MONGO_DB_SERVER_URL;

export{
    PORT,
    mongo_db_server_url
}