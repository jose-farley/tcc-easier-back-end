import { IProfessorRepository } from "../../../repositories/interfaces/IProfessorRepository";
import { ResponseModel } from "../../../util/ResponseModel";
import { RemoveInviteProfessor, RemoveInviteProfessorDTO } from "./dto";
import bcrypt from 'bcrypt'

export class RemoveInviteProfessorUC {

    constructor(private repository:IProfessorRepository){}

    async execute(data:RemoveInviteProfessor){
        let typeCheck:any = RemoveInviteProfessorDTO.safeParse(data)
        if(!typeCheck.success) return await new ResponseModel("Um ou mais campos inválidos!", true,typeCheck.error.errors );
        return await this.repository.removeInvite(typeCheck.data);
    }
}