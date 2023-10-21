import { prisma } from "../../database";
import { AddAlunoDTO, AddStudent } from "../../useCases/aluno/add/dto";
import { ResponseModel } from "../../util/ResponseModel";
import { IStudentRepository } from "../interfaces/IStudentRepository";

export class StudentRepository implements IStudentRepository {
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
                    createdAt:true
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
                    ...data
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

}