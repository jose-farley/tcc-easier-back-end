import { Router } from "express";
import { Request, Response } from "express";
import { addProfessorController } from "../../useCases/professor/add";
const professor_routes = Router();


professor_routes.post('/professor', async (req:Request, res:Response)=>{
   return await addProfessorController.handle(req, res) 
})

export {professor_routes}