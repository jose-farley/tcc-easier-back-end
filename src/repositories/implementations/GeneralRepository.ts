import { prisma } from "../../database";
import { ResponseModel } from "../../util/ResponseModel";
import { IGeneralRepository } from "../interfaces/IGeneralRepository";

export class GeneralRepository implements IGeneralRepository {

    async login(data: { email: string; password: string; }): Promise<ResponseModel> {
        try {
            let aluno = await prisma.student.findUnique({
                where: {
                    email: data.email
                }
            });
            let professor = await prisma.professor.findUnique({
                where: {
                    email: data.email
                }
            });

            if (!aluno && !professor) {
                return new ResponseModel("Usuário não encontrado", true);
            }

            if (aluno) {
                return new ResponseModel(aluno, false);
            }

            if (professor) {
                return new ResponseModel(professor, false);
            }

            // Adicione um retorno padrão para evitar o erro
            return new ResponseModel("Houve um problema ao efetuar o login", true);
        } catch (error) {
            // Retorne um objeto ResponseModel em caso de erro
            return new ResponseModel("Houve um problema ao efetuar o login", true, error.message);
        }
    }

}