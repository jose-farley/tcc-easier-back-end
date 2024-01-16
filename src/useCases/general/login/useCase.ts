import { IProfessorRepository } from "../../../repositories/interfaces/IProfessorRepository";
import { ResponseModel } from "../../../util/ResponseModel";

import bcrypt from 'bcrypt'
import { LoginUser, LoginUserDTO } from "./dto";
import { IGeneralRepository } from "../../../repositories/interfaces/IGeneralRepository";
import jwt from 'jsonwebtoken'


export class LoginUserUseCase {

    constructor(private repository:IGeneralRepository ){}

    async execute(data:LoginUser){
        let typeCheck:any = LoginUserDTO.safeParse(data)
        if(!typeCheck.success) return await new ResponseModel("Um ou mais campos inválidos!", true,typeCheck.error.errors );
        let result =  await this.repository.login(typeCheck.data);
        if(result.has_error) return await result
        if(!result.has_error){
            let res = await bcrypt.compare(typeCheck.data.password,result.data.password)
            
            if(!res) return new ResponseModel("E-mail ou senha inválidos", true)
            let payload = {email: result.data.email, id:result.data.id}
            let token =  jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' })
            result.data.token = token
        }
       
        return await result

    }
}