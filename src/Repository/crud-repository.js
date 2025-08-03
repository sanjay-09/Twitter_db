class CrudRepository{
    constructor(model){
        this.model=model;

    }
    async create(model_data){
        try{
           
            const data=await this.model.create(model_data);
            return data;
        }
        catch(err){
            console.log(err);
            throw err;
        }
    }
    async getById(object_id){
        try{
            const data=await this.model.findById(object_id);
            return data;

        }
        catch(err){
            throw err;
        }
    }

    async bulkCreate(bulk_data){
        try{
            const data=await this.model.insertMany(bulk_data);
            return data;

        }
        catch(err){
            throw err;

        }
    }

}
export default CrudRepository;