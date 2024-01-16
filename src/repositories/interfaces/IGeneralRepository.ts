import { LoginUser } from "../../useCases/general/login/dto";
import { ResponseModel } from "../../util/ResponseModel";


export interface IGeneralRepository {

    login(data:LoginUser):Promise<ResponseModel>
}