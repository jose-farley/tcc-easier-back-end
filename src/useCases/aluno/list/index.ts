import { StudentRepository } from "../../../repositories/implementations/StudentRepository";
import { ListStudentsController } from "./controller";
import { ListStudentsUseCase } from "./useCase";


const repository = new StudentRepository();
const listStudentsUseCase = new ListStudentsUseCase(repository);
const listStudentsController = new ListStudentsController(listStudentsUseCase);

export {listStudentsUseCase, listStudentsController};