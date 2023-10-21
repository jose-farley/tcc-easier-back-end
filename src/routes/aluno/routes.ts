import { Router } from "express";
import { addStudentController } from "../../useCases/aluno/add";
import { Request, Response } from "express";
import { removeStudentController } from "../../useCases/aluno/remove";
import { listStudentsController } from "../../useCases/aluno/list";
import { updateStudentController } from "../../useCases/aluno/update";

const alunoRoutes = Router();

alunoRoutes.post("/aluno", async (request:Request, response:Response)=>{
    return await addStudentController.handle(request, response);
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

export {alunoRoutes};