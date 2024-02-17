import zod from 'zod';

export const AddMenteeByInviteDTO = zod.object({
    professorId: zod.string().min(1, "Você precisa informar um id do professor"),
    menteeId: zod.string().min(1, "Você precisa informar um id de orientando")
  
})

export type AddMenteeByInvite = zod.infer<typeof AddMenteeByInviteDTO>