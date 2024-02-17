import { IProfessorRepository } from "../../../repositories/interfaces/IProfessorRepository";
import { ResponseModel } from "../../../util/ResponseModel";


import {  AddMenteeByInvite, AddMenteeByInviteDTO } from "./dto";

export class AddMenteeByInviteUC {

    constructor(private repository:IProfessorRepository){}

    async execute(data:AddMenteeByInvite){
        let typeCheck:any = AddMenteeByInviteDTO.safeParse(data)
        if(!typeCheck.success) return await new ResponseModel("Um ou mais campos inválidos!", true,typeCheck.error.errors );
        return await this.repository.addMenteeByInvite(typeCheck.data);
    }
}