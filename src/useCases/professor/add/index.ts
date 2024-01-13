import { ProfessorRepository } from "../../../repositories/implementations/ProfessorRepository";
import { AddProfessorController } from "./controller";
import { AddProfessorUseCase } from "./useCase";

let repo =  new ProfessorRepository()
let addProfessorUseCase = new AddProfessorUseCase(repo)
let addProfessorController = new AddProfessorController(addProfessorUseCase)

export {addProfessorUseCase, addProfessorController}