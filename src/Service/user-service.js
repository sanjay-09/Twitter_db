
import {UserRepository} from "../Repository/index.js"
import CrudService from "./crud-service.js"

class UserService extends CrudService{
    constructor(){
        const userRepository=new UserRepository();
        super(userRepository);
    }
    

}
export default UserService;