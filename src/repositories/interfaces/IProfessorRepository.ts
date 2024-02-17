import { AddMentee } from "../../useCases/professor/AddMentees/dto";
import { AddProfessor } from "../../useCases/professor/add/dto";
import { AddInviteProfessor } from "../../useCases/professor/addInvite/AddInvite/dto";
import { AddMenteeByInvite } from "../../useCases/professor/addMenteeByInvite/dto";
import { RemoveInviteProfessor } from "../../useCases/professor/removeInvite/dto";
import { ResponseModel } from "../../util/ResponseModel";


export interface IProfessorRepository {

    register(data:AddProfessor):Promise<ResponseModel>
    addMentee(data:AddMentee):Promise<ResponseModel>
    addInvite(data:AddInviteProfessor):Promise<ResponseModel>
    removeInvite(data:RemoveInviteProfessor):Promise<ResponseModel>
    list():Promise<ResponseModel>
    addMenteeByInvite(data:AddMenteeByInvite):Promise<ResponseModel>
}