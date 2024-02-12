import { Router } from "express";
import { addStudentController } from "../../useCases/aluno/add";
import { Request, Response } from "express";
import { removeStudentController } from "../../useCases/aluno/remove";
import { listStudentsController } from "../../useCases/aluno/list";
import { updateStudentController } from "../../useCases/aluno/update";
import { addInviteStudentController } from "../../useCases/aluno/AddInvite";
import { removeInviteController } from "../../useCases/aluno/invites/remove";
import { addAdvisorController } from "../../useCases/aluno/addAdvisor";

const alunoRoutes = Router();

alunoRoutes.post("/aluno", async (request:Request, response:Response)=>{
  
    return await addStudentController.handle(request, response);
});
alunoRoutes.post("/aluno/convite", async (request:Request, response:Response)=>{
    return await addInviteStudentController.handle(request, response);
});
alunoRoutes.delete("/aluno", async (request:Request, response:Response)=>{
    return await removeStudentController.handle(request, response);
});
alunoRoutes.get("/aluno", async (request:Request, response:Response)=>{
    return await listStudentsController.handle(request, response);
});
alunoRoutes.put("/aluno", async (request:Request, response:Response)=>{
    return await updateStudentController.handle(request, response);
});
alunoRoutes.delete("/aluno/convite", async (request:Request, response:Response)=>{

    return await removeInviteController.handle(request, response);
});
alunoRoutes.post("/aluno/orientador", async (request:Request, response:Response)=>{
    return await addAdvisorController.handle(request, response);
});

export {alunoRoutes};