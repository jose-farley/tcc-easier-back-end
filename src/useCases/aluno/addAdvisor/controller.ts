import { AddAdvisorUseCase } from "./useCase";
import { Request, Response } from "express";

export class AddAdvisorController {

    constructor(private useCase:AddAdvisorUseCase){}

    async handle(request:Request, response:Response){
        const result = await this.useCase.execute(request.body);
        console.log(result)
        if(result.has_error) return response.status(400).json(result);
        return response.status(200).json(result);
    }
}