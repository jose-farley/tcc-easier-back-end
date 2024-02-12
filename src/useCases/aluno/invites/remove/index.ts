import { StudentRepository } from "../../../../repositories/implementations/StudentRepository";
import { RemoveInviteController } from "./controller";
import { RemoveInviteUseCase } from "./useCase";

let repository = new StudentRepository()

let removeInviteUseCase = new RemoveInviteUseCase(repository)
let removeInviteController = new RemoveInviteController(removeInviteUseCase)

export {removeInviteController, removeInviteUseCase}