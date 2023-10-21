import { Router } from "express";
import { alunoRoutes } from "./aluno/routes";

const routes = Router();
routes.use(alunoRoutes);

export {routes};