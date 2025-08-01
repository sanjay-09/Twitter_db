import bodyParser from 'body-parser';
import express from 'express';
import { PORT } from './Config/serverConfig.js';
import connect from './Config/db.js';
import appRouter from "./Routes/index.js"

const setUpAndStartServer=()=>{
    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.use("/api",appRouter);

    app.listen(PORT,async()=>{
        console.log(`server is listening on the PORT ${PORT}`)
        await connect();
        console.log('database is connected');
    })

}

setUpAndStartServer();