import Tweet from "../Model/tweet.js";

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

}
export default TweetRepository;