import { ProfessorRepository } from "../../../../repositories/implementations/ProfessorRepository";
import { AddInviteProfessorController } from "./controller";
import { AddInviteProfessorUC } from "./useCase";


const repository = new ProfessorRepository();
const addInviteProfessorUC = new AddInviteProfessorUC(repository);
const addInviteProfessorController = new AddInviteProfessorController(addInviteProfessorUC);

export {addInviteProfessorUC, addInviteProfessorController};