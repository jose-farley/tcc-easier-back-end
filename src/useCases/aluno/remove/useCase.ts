
import z from 'zod';
import { IStudentRepository } from '../../../repositories/interfaces/IStudentRepository';
import { RemoveStudent, RemoveStudentDTO } from './dto';
import { ResponseModel } from '../../../util/ResponseModel';

export class RemoveStudentUseCase {

    constructor(private repository:IStudentRepository){}

    async execute(data:RemoveStudent){    
        const typecheck:any = RemoveStudentDTO.safeParse(data);
        console.log(typecheck)
        if(!typecheck.success) return await new ResponseModel("Invalid id", true, "invalid id");     
        return await this.repository.remove(typecheck.data.id);
    }
}