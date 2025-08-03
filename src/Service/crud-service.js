class CrudService{
    constructor(repository){
        this.repository=repository;
    }
    async create(data){
        try{
           
            const result=await this.repository.create(data);
            return result; 

        }
        catch(err){
           
            throw err;

        }
    }

    async getById(object_id){
        try{
            const result=await this.repository.getById(object_id);
            return result;

        }
        catch(err){
            throw err;
        }
    }
    async bulkCreate(data){
        try{
            const result=await this.repository.insertMany(data);
            return result;

        }
        catch(err){
            throw err;
        }
    }


}
export default CrudService;