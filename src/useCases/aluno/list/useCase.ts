import { IStudentRepository } from "../../../repositories/interfaces/IStudentRepository";
import { ResponseModel } from "../../../util/ResponseModel";

import z from 'zod';


export class ListStudentsUseCase {

    constructor(private repository:IStudentRepository){}

    async execute(){
       return await this.repository.list();
    }
}