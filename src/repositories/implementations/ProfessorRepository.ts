import { prisma } from "../../database";
import { AddMentee } from "../../useCases/professor/AddMentees/dto";
import { AddProfessor } from "../../useCases/professor/add/dto";
import { AddInviteProfessor } from "../../useCases/professor/addInvite/AddInvite/dto";
import { AddMenteeByInvite } from "../../useCases/professor/addMenteeByInvite/dto";
import { RemoveInviteProfessor } from "../../useCases/professor/removeInvite/dto";
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
 
    async addMenteeByInvite(data:AddMenteeByInvite){
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
            await prisma.professorInvites.deleteMany({
                where:{
                    AND: [
                        {
                            advisorId:data.professorId
                        },
                        {
                            studentId:data.menteeId
                        }
                    ]
                   
                }
            })
            return new ResponseModel("orientando adicionado com sucesso.", false)
        } catch (error) {
            return new ResponseModel("Houve um problema ao adicionar o orientando.", true, error.message)

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
                     professorInvites:true,
                     mentees:true
                 }
             })
             return await new ResponseModel(result, false, null)
        } catch (error) {
         return await new ResponseModel("There was a problem listing the students", true, error.message)   
        }
     }

     async removeInvite(data:RemoveInviteProfessor){
        try {
            await prisma.professorInvites.delete({
                where:{
                    id:data.id
                }
            })
            return new ResponseModel("Convite removido com sucesso.", false)
        } catch (error) {
            return new ResponseModel("Houve um erro ao remover o convite.", true) 
        }
     }

     async addInvite(data:AddInviteProfessor){
        try {

            let student = await prisma.student.findUnique({
                where:{
                    id:data.studentId
                }
            })
            await prisma.professorInvites.create({
                data:{
                    studentName:student!.name,
                    advisorId:data.advisorId,
                    mensagem:data.message,
                    studentId:data.studentId
                }
            })
            return new ResponseModel("Convite enviado!", false)
        } catch (error) {
            return new ResponseModel("Houve um erro ao enviar o convite.", true)
        }
    }
    
}