import { AddProfessor } from "../../useCases/professor/add/dto";
import { ResponseModel } from "../../util/ResponseModel";


export interface IProfessorRepository {

    register(data:AddProfessor):Promise<ResponseModel>


}