import { ProfessorRepository } from "../../../repositories/implementations/ProfessorRepository";
import { AddMenteeController } from "./controller";
import { AddMenteesUseCase } from "./useCase";

let repo =  new ProfessorRepository()
let addMenteeUseCase = new AddMenteesUseCase(repo)
let addMenteeController = new AddMenteeController(addMenteeUseCase)

export {addMenteeUseCase, addMenteeController}