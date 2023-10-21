import { StudentRepository } from "../../../repositories/implementations/StudentRepository";
import { AddStudentController } from "./controller";
import { AddAlunoUserCase } from "./useCase";

const repository = new StudentRepository();
const addStudentUserCase = new AddAlunoUserCase(repository);
const addStudentController = new AddStudentController(addStudentUserCase);

export {addStudentController, addStudentUserCase};