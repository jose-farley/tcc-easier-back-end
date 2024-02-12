import { AddMentee } from "../../useCases/professor/AddMentees/dto";
import { AddProfessor } from "../../useCases/professor/add/dto";
import { ResponseModel } from "../../util/ResponseModel";


export interface IProfessorRepository {

    register(data:AddProfessor):Promise<ResponseModel>
    addMentee(data:AddMentee):Promise<ResponseModel>
    list():Promise<ResponseModel>
}