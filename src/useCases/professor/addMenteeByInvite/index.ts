import { ProfessorRepository } from "../../../repositories/implementations/ProfessorRepository";
import { AddMenteeByInviteController } from "./controller";
import { AddMenteeByInviteUC } from "./useCase";


let repo =  new ProfessorRepository()
let addMenteeByInviteUC = new AddMenteeByInviteUC(repo)
let addMenteeByInviteController = new AddMenteeByInviteController(addMenteeByInviteUC)

export {addMenteeByInviteUC, addMenteeByInviteController}