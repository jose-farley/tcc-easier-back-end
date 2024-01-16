import { Router } from "express";
import { alunoRoutes } from "./aluno/routes";
import { professor_routes } from "./professor/routes";
import { loginUserController } from "../useCases/general/login";
import { Request, Response } from "express";


const routes = Router();

routes.post("/login", async (req:Request, res:Response)=>{
    return await loginUserController.handle(req, res)
})

routes.use(alunoRoutes);
routes.use(professor_routes)



export {routes};