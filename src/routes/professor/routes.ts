import { Router } from "express";
import { Request, Response } from "express";
import { addProfessorController } from "../../useCases/professor/add";
import { addMenteeController } from "../../useCases/professor/AddMentees";
import { listProfessorController } from "../../useCases/professor/list";
const professor_routes = Router();


professor_routes.post('/professor', async (req:Request, res:Response)=>{
   return await addProfessorController.handle(req, res) 
})
professor_routes.get('/professor', async (req:Request, res:Response)=>{
   return await listProfessorController.handle(req, res) 
})
professor_routes.put('/professor', async (req:Request, res:Response)=>{
   return await addMenteeController.handle(req, res) 
})

export {professor_routes}