import { IProfessorRepository } from "../../../repositories/interfaces/IProfessorRepository";
import { ResponseModel } from "../../../util/ResponseModel";

import bcrypt from 'bcrypt'
import { AddMentee, AddMenteeDTO } from "./dto";

export class AddMenteesUseCase {

    constructor(private repository:IProfessorRepository){}

    async execute(data:AddMentee){
        let typeCheck:any = AddMenteeDTO.safeParse(data)
        if(!typeCheck.success) return await new ResponseModel("Um ou mais campos inválidos!", true,typeCheck.error.errors );
        typeCheck.data.password = await bcrypt.hash(typeCheck.data.password, 12)
        return await this.repository.addMentee(typeCheck.data);
    }
}