import {CommentRepository,TweetRepository} from "../Repository/index.js"

class CommentService{
    constructor(){
        this.commRepo=new CommentRepository();
        this.tweetRepo=new TweetRepository();
    }

    async createComment(model_id,model_type,user,content){
        try{
            if(model_type=='tweet'){
                var commentable=await this.tweetRepo.getById(model_id);
            

            }
            else if(model_type=='comment'){
                var commentable=await this.commRepo.getById(model_id);

            }

            const comment=await this.commRepo.create({
                onModel:model_type,
                commentable,
                comments:[],
                likes:[],
                user:user,
                content,
            });

            console.log(commentable);

            commentable.comments.push(comment);
            await commentable.save();

            return 1;



        }
        catch(err){
           console.log(err);
            throw err;


        }
    }
}

export default CommentService

