import { StudentRepository } from "../../../repositories/implementations/StudentRepository";
import { UpdateStudentController } from "./controller";
import { UpdateStudentUseCase } from "./useCase";


const repository = new StudentRepository();
const updataStudentUseCase = new UpdateStudentUseCase(repository);
const updateStudentController = new UpdateStudentController(updataStudentUseCase);

export {updataStudentUseCase, updateStudentController};