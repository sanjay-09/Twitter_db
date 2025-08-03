import express from "express";
import { TweetController,UserController,LikeController,CommentController } from "../../Controller/index.js";



const router=express.Router();

router.post("/create",TweetController.create);
router.get("/tweet/:id",TweetController.get);


router.post("/user",UserController.create);



router.post("/toggleLike",LikeController.toggleLike);




router.post("/comment",CommentController.create)


export default router;