import { ProfessorRepository } from "../../../repositories/implementations/ProfessorRepository";
import { ListProfessorController } from "./controller";
import { ListProfessorUseCase  } from "./useCase";


const repository = new ProfessorRepository();
const listProfessorUseCase = new ListProfessorUseCase(repository);
const listProfessorController = new ListProfessorController(listProfessorUseCase);

export {listProfessorUseCase, listProfessorController};