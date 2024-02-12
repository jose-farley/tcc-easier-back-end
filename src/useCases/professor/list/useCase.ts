import { IProfessorRepository } from "../../../repositories/interfaces/IProfessorRepository";
import { IStudentRepository } from "../../../repositories/interfaces/IStudentRepository";
import { ResponseModel } from "../../../util/ResponseModel";

import z from 'zod';


export class ListProfessorUseCase  {

    constructor(private repository:IProfessorRepository){}

    async execute(){
       return await this.repository.list();
    }
}