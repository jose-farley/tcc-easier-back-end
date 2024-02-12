import zod from 'zod';

export const AddAdvisorDTO = zod.object({
    advisorId: zod.string().min(1, "Você precisa informar o id do professor."),
    studentId:zod.string().min(1, "Você precisa informar o id do aluno"),
})

export type AddAdvisor = zod.infer<typeof AddAdvisorDTO>

