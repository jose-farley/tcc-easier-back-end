import { Request, Response } from "express";
import { RemoveInviteUseCase } from "./useCase";

export class RemoveInviteController {

    constructor(private useCase:RemoveInviteUseCase){}

    async handle(request:Request, response:Response){

        const result = await this.useCase.execute(request.body);
        if(result.has_error) return response.status(400).json(result);
        return response.status(200).json(result);
    }
}