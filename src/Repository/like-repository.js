import CrudRepository from "./crud-repository.js";
import Like from "../Model/like.js"


class LikeRepsoitory extends CrudRepository{
    constructor(){
        super(Like);

    }
    async findByData(data){
        try{
            const like=await Like.findOne(data);
            return like;

        }
        catch(err){
            throw err;
        }
    }
}
export default LikeRepsoitory;
