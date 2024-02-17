import { ProfessorRepository } from "../../../repositories/implementations/ProfessorRepository";
import { RemoveInviteProfessorController } from "./controller";
import {  RemoveInviteProfessorUC } from "./useCase";

let repo =  new ProfessorRepository()
let removeInviteProfessorUC = new RemoveInviteProfessorUC(repo)
let removeInviteProfessorController = new RemoveInviteProfessorController(removeInviteProfessorUC)

export {removeInviteProfessorUC, removeInviteProfessorController}