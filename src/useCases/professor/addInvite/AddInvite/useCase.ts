import { AddInviteProfessor, AddInviteProfessorDTO } from "./dto";
import z from 'zod';
import bcrypt from 'bcrypt'
import { IProfessorRepository } from "../../../../repositories/interfaces/IProfessorRepository";
import { ResponseModel } from "../../../../util/ResponseModel";

export class AddInviteProfessorUC {

    constructor(private repository:IProfessorRepository){}

    async execute(data:AddInviteProfessor){
        let typeCheck:any = AddInviteProfessorDTO.safeParse(data)
        if(!typeCheck.success) return await new ResponseModel("something went wrong!", true,typeCheck.error.errors );
        return await this.repository.addInvite(typeCheck.data);
    }
}