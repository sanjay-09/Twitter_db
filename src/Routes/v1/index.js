import express from "express";
import { TweetController } from "../../Controller/index.js";

const router=express.Router();

router.post("/create",TweetController.create);

export default router;