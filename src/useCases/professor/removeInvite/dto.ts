import z from 'zod';

export const RemoveInviteProfessorDTO = z.object({
    id:z.string().uuid()               
});

export type RemoveInviteProfessor = z.infer<typeof RemoveInviteProfessorDTO>