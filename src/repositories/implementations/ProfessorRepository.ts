import { prisma } from "../../database";
import { AddProfessor } from "../../useCases/professor/add/dto";
import { ResponseModel } from "../../util/ResponseModel";
import { IProfessorRepository } from "../interfaces/IProfessorRepository";

export class ProfessorRepository implements IProfessorRepository {
    async register(data:AddProfessor): Promise<ResponseModel> {
        try {
            await prisma.professor.create({
               data:{
                name:data.name,
                email: data.email,
                cpf:data.cpf,
                password:data.password
               }
            })
            return new ResponseModel("Professor cadastrado!", false)
        } catch (error) {
            return new ResponseModel("Houve um problema ao cadastrar o professor!", false, error.message)
        }
    }
    
}