import { TweetRepository,HashTagRepository } from "../Repository/index.js";


class TweetService{
    constructor(){
        this.tweetRepsitory=new TweetRepository();
        this.hashTagRepository=new HashTagRepository();
    }
    async create(data){
        try{

            const {content}=data;
            let hashtags = content.match(/#\w+/g);
            hashtags=hashtags.map((h)=>h.substring(1).toLowerCase()); //["virat","rohit"]


            const tweet=await this.tweetRepsitory.create(data);

            const hashTagObjectPresentInDb=await this.hashTagRepository.getByTagNames(hashtags);
            const hashTagPresentInDb=hashTagObjectPresentInDb.map((h)=>h.title);

            let filterHashTag=hashtags.filter((h)=>{
                return !hashTagPresentInDb.includes(h)
            })

            //transforming hashtag payload
            filterHashTag=filterHashTag.map((tag)=>{
                return {title:tag,tweets:[tweet.id]}
            })
            
            //bulk crete hashtag
            await this.hashTagRepository.bulkCreate(filterHashTag);

            hashTagObjectPresentInDb.forEach((tag)=>{
                tag.tweets.push(tweet.id);
                tag.save();
                
            })


            return 1;



        }
        catch(err){
            console.log(err);

        }


    }

    async getWithComment(object_id){
        try{
            const data=await this.tweetRepsitory.getWithComment(object_id);
            return data;

        }
        catch(err){
            throw err;
        }
    }

}
export default TweetService;