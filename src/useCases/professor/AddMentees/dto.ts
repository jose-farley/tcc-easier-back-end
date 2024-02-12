import zod from 'zod';

export const AddMenteeDTO = zod.object({
    professorId: zod.string().min(1, "Você precisa informar um id do professor")
    .email("E-mail inválido"),
    menteeId: zod.string().min(1, "Você precisa informar um id de orientando")
  
})

export type AddMentee = zod.infer<typeof AddMenteeDTO>