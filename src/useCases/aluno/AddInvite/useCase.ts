import { IStudentRepository } from "../../../repositories/interfaces/IStudentRepository";
import { ResponseModel } from "../../../util/ResponseModel";
import { AddInviteStudentDTO, AddinviteStudent } from "./dto";
import z from 'zod';
import bcrypt from 'bcrypt'

export class AddInviteStudentUC {

    constructor(private repository:IStudentRepository){}

    async execute(data:AddinviteStudent){
        let typeCheck:any = AddInviteStudentDTO.safeParse(data)
        if(!typeCheck.success) return await new ResponseModel("something went wrong!", true,typeCheck.error.errors );
        return await this.repository.addInvite(typeCheck.data);
    }
}