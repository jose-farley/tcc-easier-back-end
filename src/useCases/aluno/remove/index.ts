import { StudentRepository } from "../../../repositories/implementations/StudentRepository";
import { RemoveStudentController } from "./controller";
import { RemoveStudentUseCase } from "./useCase";


const repository = new StudentRepository();
const removeStudentUseCase = new RemoveStudentUseCase(repository);
const removeStudentController = new RemoveStudentController(removeStudentUseCase);

export {removeStudentController, removeStudentUseCase};