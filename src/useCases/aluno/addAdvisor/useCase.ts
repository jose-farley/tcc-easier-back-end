import { IStudentRepository } from "../../../repositories/interfaces/IStudentRepository";
import { ResponseModel } from "../../../util/ResponseModel";
import { AddAdvisor, AddAdvisorDTO } from "./dto";
import z from 'zod';
import bcrypt from 'bcrypt'

export class AddAdvisorUseCase {

    constructor(private repository:IStudentRepository){}

    async execute(data:AddAdvisor){
        return await this.repository.addAdvisor(data);
    }
}