import { IStudentRepository } from "../../../../repositories/interfaces/IStudentRepository";
import { ResponseModel } from "../../../../util/ResponseModel";
import { RemoveInvite, RemoveInviteDTO } from "./model";


export class RemoveInviteUseCase {

    constructor(private repository:IStudentRepository){}

    async execute(data:RemoveInvite){    
        const typecheck:any = RemoveInviteDTO.safeParse(data);
        console.log(typecheck)
        if(!typecheck.success) return await new ResponseModel("Invalid id", true, "invalid id");     
        return await this.repository.removeInvite(typecheck.data.id);
    }
}