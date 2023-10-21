import { IStudentRepository } from "../../../repositories/interfaces/IStudentRepository";
import { ResponseModel } from "../../../util/ResponseModel";

import z from 'zod';
import bcrypt from 'bcrypt'
import { UpdateStudent, UpdateStudentDTO } from "./dto";

export class UpdateStudentUseCase {

    constructor(private repository:IStudentRepository){}

    async execute(data:UpdateStudent){
        let typeCheck:any = UpdateStudentDTO.safeParse(data)
        if(!typeCheck.success) return await new ResponseModel("something went wrong!", true,typeCheck.error.errors );
        typeCheck.data.password = await bcrypt.hash(typeCheck.data.password, 12);
        return await this.repository.update(typeCheck.data);
    }
}