import Tweet from "../Model/tweet.js";
import Comment from "../Model/comment.js";

class TweetRepository{

    async create(data){
        try{
            const tweet=await Tweet.create(data);
            return tweet;

        }
        catch(err){
            throw err;

        }
    }

    async getById(object_id){
        try{
            const tweet=await Tweet.findById(object_id);
            return tweet;

        }
        catch(err){

        }
    }
    async getWithComment(object_id){
        try{
            const tweet=await Tweet.findById(object_id);
            tweet.comments=await this.populateComments(tweet.comments);
            return tweet;

        }
        catch(err){
            throw err;

        }
    }
    async populateComments(commentsIds){
        try{
            const comments=await Comment.find({
                _id:{
                    $in:commentsIds
                }
            })

            for(let comment of comments){
                if(comment.comments.length>0){
                    comment.comments=await this.populateComments(comment.comments);
                }

            }
            return comments;

        }
        catch(err){
            throw err;

        }
    }
}
export default TweetRepository;