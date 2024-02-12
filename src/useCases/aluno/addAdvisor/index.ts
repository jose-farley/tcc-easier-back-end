import { StudentRepository } from "../../../repositories/implementations/StudentRepository";
import { AddAdvisorController } from "./controller";
import { AddAdvisorUseCase } from "./useCase";


const repository = new StudentRepository();
const addAdvisorUseCase = new AddAdvisorUseCase(repository);
const addAdvisorController = new AddAdvisorController(addAdvisorUseCase);

export {addAdvisorUseCase, addAdvisorController};