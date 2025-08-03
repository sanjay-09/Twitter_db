import { LikeRepsoitory,TweetRepository,CommentRepository } from "../Repository/index.js";


class LikeService{
    constructor(){
        this.likeRepository=new LikeRepsoitory();
        this.tweetRepository=new TweetRepository();
        this.commentRepository=new CommentRepository();
    }

    async toggleLike(model_id,model_type,user_id){
        try{
            if(model_type=='tweet'){
                var likeable=await this.tweetRepository.getById(model_id);

            }
            else if(model_type=='comment'){
                var likeable=await this.commentRepository.getById(model_id);

            }


            const exist=await this.likeRepository.findByData({
                onModel:model_type,
                likeable:model_id,
                user:user_id
            })
            console.log("Exist",exist);
            if(exist){
                likeable.likes.pull(exist.id);
                 await likeable.save();
                 await exist. deleteOne()
            }
            else{
              const newLike= await this.likeRepository.create({
                onModel:model_type,
                likeable:model_id,
                user:user_id
            });
            likeable.likes.push(newLike.id);
            await likeable.save();
            }


            return true;


        }
        catch(err){
            console.log(err);
            throw err;

        }
    }
}
export default LikeService;