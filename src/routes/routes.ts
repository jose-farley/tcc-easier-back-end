import { Router } from "express";
import { alunoRoutes } from "./aluno/routes";
import { professor_routes } from "./professor/routes";

const routes = Router();
routes.use(alunoRoutes);
routes.use(professor_routes)

export {routes};