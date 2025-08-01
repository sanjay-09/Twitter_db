import HashTag from "../Model/hashtag.js";


class HashTagRepository{

    async create(data){
        try{
            const hashtags=await HashTag.create(data);
            return hashtags;

        }
        catch(err){
            throw err;
        }
    }
    async getByTagNames(names){
        try{
            const hashtags=await HashTag.find({
                title:names
            });
            return hashtags;

        }
        catch(err){
            throw err;
        }
    }
    async bulkCreate(data){
        try{
            await HashTag.insertMany(data);
            return 1;

        }
        catch(err){

        }
    }

}
export default HashTagRepository;