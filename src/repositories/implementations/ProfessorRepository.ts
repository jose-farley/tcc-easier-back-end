import { prisma } from "../../database";
import { AddMentee } from "../../useCases/professor/AddMentees/dto";
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
                password:data.password,
                role:"professor"
               }
            })
            return new ResponseModel("Professor cadastrado!", false)
        } catch (error) {
            return new ResponseModel("Houve um problema ao cadastrar o professor!", true, error.message)
        }
    }

    async addMentee(data:AddMentee): Promise<ResponseModel> {
        try {
            await prisma.professor.update({
                where:{
                    id:data.professorId
                }, data:{
                    mentees:{
                        connect:{
                            id:data.menteeId
                        }
                    }
                }
            
            })
            return new ResponseModel("Orientando adicionado!", false)
        } catch (error) {
            return new ResponseModel("Houve um problema ao adicionar o orientando", true, error.message)
        }
    }
    async list(): Promise<ResponseModel> {
        try {
             const result = await prisma.professor.findMany({
                 select:{
                     id:true,
                     name:true,
                     email:true, 
                     createdAt:true,
                 }
             })
             return await new ResponseModel(result, false, null)
        } catch (error) {
         return await new ResponseModel("There was a problem listing the students", true, error.message)   
        }
     }
    
}