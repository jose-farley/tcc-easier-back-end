import { GeneralRepository } from "../../../repositories/implementations/GeneralRepository";
import { LoginUserController } from "./controller";
import { LoginUserUseCase } from "./useCase";


let repo =  new GeneralRepository()
let loginUserUseCase = new LoginUserUseCase(repo)
let loginUserController = new LoginUserController(loginUserUseCase)

export {loginUserUseCase, loginUserController}