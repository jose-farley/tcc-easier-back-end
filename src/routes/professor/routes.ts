import { Router } from "express";
import { Request, Response } from "express";
import { addProfessorController } from "../../useCases/professor/add";
import { addMenteeController } from "../../useCases/professor/AddMentees";
import { listProfessorController } from "../../useCases/professor/list";
import { addInviteProfessorController } from "../../useCases/professor/addInvite/AddInvite";
import { removeInviteProfessorController } from "../../useCases/professor/removeInvite";
import { addMenteeByInviteController } from "../../useCases/professor/addMenteeByInvite";
const professor_routes = Router();


professor_routes.post('/professor', async (req:Request, res:Response)=>{
   return await addProfessorController.handle(req, res) 
})
professor_routes.post('/professor/convidar/', async (req:Request, res:Response)=>{
   return await addInviteProfessorController.handle(req, res) 
})
professor_routes.delete('/professor/convidar/', async (req:Request, res:Response)=>{
   return await removeInviteProfessorController.handle(req, res) 
})

professor_routes.post('/professor/orientando/',  async (req:Request, res:Response)=>{
   console.log(req.body)
   return await addMenteeByInviteController.handle(req, res) 
})

professor_routes.get('/professor', async (req:Request, res:Response)=>{
   return await listProfessorController.handle(req, res) 
})
professor_routes.put('/professor', async (req:Request, res:Response)=>{
   return await addMenteeController.handle(req, res) 
})

export {professor_routes}