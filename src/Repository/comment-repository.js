import Comment from "../Model/comment.js";
import CrudRepository from "./crud-repository.js";

class CommentRepository extends CrudRepository{

    constructor(){
        super(Comment);
    }

    async findByData(data){
        try{
            const result=await Comment.findOne(data);
            return result;

        }
        catch(err){
            throw err;
        }
    }
}

export default CommentRepository;