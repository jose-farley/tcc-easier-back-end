import zod from 'zod';

export const AddInviteProfessorDTO = zod.object({
    advisorId: zod.string().min(1, "Você precisa informar o id do professor."),
    studentId:zod.string().min(1, "Você precisa informar o id do aluno"),
    message:zod.string().optional()
})

export type AddInviteProfessor = zod.infer<typeof AddInviteProfessorDTO>

