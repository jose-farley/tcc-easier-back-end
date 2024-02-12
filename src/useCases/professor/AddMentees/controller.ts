import { Request, Response } from "express";
import { AddMenteesUseCase } from "./useCase";


export class AddMenteeController {

    constructor(private useCase:AddMenteesUseCase){}

    async handle(request:Request, response:Response){
        const result = await this.useCase.execute(request.body);
        if(result.has_error) return response.status(400).json(result);
        return response.status(200).json(result);
    }
}