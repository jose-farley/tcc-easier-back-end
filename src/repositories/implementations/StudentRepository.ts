import { prisma } from "../../database";
import { AddinviteStudent } from "../../useCases/aluno/AddInvite/dto";
import { AddAlunoDTO, AddStudent } from "../../useCases/aluno/add/dto";
import { AddAdvisor } from "../../useCases/aluno/addAdvisor/dto";
import { ResponseModel } from "../../util/ResponseModel";
import { IStudentRepository } from "../interfaces/IStudentRepository";

export class StudentRepository implements IStudentRepository {
    async addAdvisor(data:any): Promise<ResponseModel> {
        try {
            const result = await prisma.student.update({
                where:{id:data.data.studentId},
                data:{
                    advisorId:data.data.advisorId
                }
            })
            return await new ResponseModel("Orientador adicionado com sucesso.", false, null) 
       } catch (error) {
        return await new ResponseModel("Houve um problema ao adicionar o orientador", true, error.message)   

       }
    }
    async removeInvite(id: string): Promise<ResponseModel> {
        try {
            await prisma.studentInvite.delete({where:{id:id}});
            return await new ResponseModel("Convite removido com sucesso.", false, null);
        } catch (error) {
            return await new ResponseModel("Houve um problema removendo o convite.", true, error.message);
        }
    }
    async update(data: { id: string; name: string; email: string; password: string; registration: string; course: string; phoneNumber?: string | undefined; }): Promise<ResponseModel> {
       try {
            const result = await prisma.student.update({
                where:{id:data.id},
                data:{
                    ...data
                }
            })
            return await new ResponseModel("Student updated successfully.", false, null) 
       } catch (error) {
        return await new ResponseModel("There was a problem updating the student", true, error.message)   

       }
    }
    async list(): Promise<ResponseModel> {
       try {
            const result = await prisma.student.findMany({
                select:{
                    id:true,
                    name:true,
                    email:true,
                    course:true,
                    phoneNumber:true,
                    registration:true,
                    theme:true,
                    description:true,
                    createdAt:true,
                    advisorId:true,
                    invites:true
                }
            })
            return await new ResponseModel(result, false, null)
       } catch (error) {
        return await new ResponseModel("There was a problem listing the students", true, error.message)   
       }
    }
    async register(data:AddStudent): Promise<ResponseModel> {
        try {
            await prisma.student.create({
                data:{
                  name:data.name,
                  email:data.email,
                  course:data.course,
                  password:data.password,
                  registration:data.registration,
                  phoneNumber:data.phoneNumber,
                  role:"student",
                  description:"Não informada",
                  theme:"Não informado",
                  
                }
            })
            return await new ResponseModel("Student registered successfully.", false, null)    
        } catch (error) {
            return await new ResponseModel("There was a problem registering the student", true, error.message)   
        }
    }
    async remove(id: string): Promise<ResponseModel> {
        try {
            await prisma.student.delete({where:{id:id}});
            return await new ResponseModel("Student removed successfully.", false, null);
        } catch (error) {
            return await new ResponseModel("There was a problem removing the student.", true, error.message);
        }
    }
    async addInvite(data:AddinviteStudent){
        try {

            let professor = await prisma.professor.findUnique({
                where:{
                    id:data.advisorId
                }
            })
            await prisma.studentInvite.create({
                data:{
                    professorName:professor!.name,
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