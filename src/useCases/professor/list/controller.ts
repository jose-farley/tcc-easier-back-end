
import { Request, Response } from "express";
import { ListProfessorUseCase } from "./useCase";

export class ListProfessorController {

    constructor(private useCase:ListProfessorUseCase){}

    async handle(request:Request, response:Response){
        const result = await this.useCase.execute();
        if(result.has_error) return response.status(400).json(result);
        return response.status(200).json(result);
    }
}