import { IProfessorRepository } from "../../../repositories/interfaces/IProfessorRepository";
import { ResponseModel } from "../../../util/ResponseModel";
import { AddProfessor, AddProfessorDTO } from "./dto";
import bcrypt from 'bcrypt'

export class AddProfessorUseCase {

    constructor(private repository:IProfessorRepository){}

    async execute(data:AddProfessor){
        let typeCheck:any = AddProfessorDTO.safeParse(data)
        if(!typeCheck.success) return await new ResponseModel("Um ou mais campos inválidos!", true,typeCheck.error.errors );
        typeCheck.data.password = await bcrypt.hash(typeCheck.data.password, 12)
        return await this.repository.register(typeCheck.data);
    }
}