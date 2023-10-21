
import { Request, Response } from "express";
import { ListStudentsUseCase } from "./useCase";

export class ListStudentsController {

    constructor(private useCase:ListStudentsUseCase){}

    async handle(request:Request, response:Response){
        const result = await this.useCase.execute();
        if(result.has_error) return response.status(400).json(result);
        return response.status(200).json(result);
    }
}