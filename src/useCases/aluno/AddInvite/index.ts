import { StudentRepository } from "../../../repositories/implementations/StudentRepository";
import { AddInviteStudentController } from "./controller";
import { AddInviteStudentUC } from "./useCase";


const repository = new StudentRepository();
const addInviteStudentUC = new AddInviteStudentUC(repository);
const addInviteStudentController = new AddInviteStudentController(addInviteStudentUC);

export {addInviteStudentUC, addInviteStudentController};