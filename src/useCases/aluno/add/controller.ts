import { AddAlunoUserCase } from "./useCase";
import { Request, Response } from "express";

export class AddStudentController {

    constructor(private useCase:AddAlunoUserCase){}

    async handle(request:Request, response:Response){
        const result = await this.useCase.execute(request.body);
        if(result.has_error) return response.status(400).json(result);
        return response.status(200).json(result);
    }
}