import { IStudentRepository } from "../../../repositories/interfaces/IStudentRepository";
import { ResponseModel } from "../../../util/ResponseModel";
import { AddAlunoDTO, AddStudent } from "./dto";
import z from 'zod';
import bcrypt from 'bcrypt'

export class AddAlunoUserCase {

    constructor(private repository:IStudentRepository){}

    async execute(data:AddStudent){
        let typeCheck:any = AddAlunoDTO.safeParse(data)
        if(!typeCheck.success) return await new ResponseModel("something went wrong!", true,typeCheck.error.errors );
        typeCheck.data.password = await bcrypt.hash(typeCheck.data.password, 12)
        return await this.repository.register(typeCheck.data);
    }
}