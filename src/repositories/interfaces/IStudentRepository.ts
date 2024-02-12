import { AddinviteStudent } from "../../useCases/aluno/AddInvite/dto";
import { AddStudent } from "../../useCases/aluno/add/dto";
import { AddAdvisor } from "../../useCases/aluno/addAdvisor/dto";
import { UpdateStudent } from "../../useCases/aluno/update/dto";
import { ResponseModel } from "../../util/ResponseModel";

export interface IStudentRepository {

    register(data:AddStudent):Promise<ResponseModel>
    remove(id:string):Promise<ResponseModel>
    removeInvite(id:string):Promise<ResponseModel>
    list():Promise<ResponseModel>
    update(data:UpdateStudent):Promise<ResponseModel>
    addInvite(data:AddinviteStudent):Promise<ResponseModel>
    addAdvisor(data:any):Promise<ResponseModel>
}