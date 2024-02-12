import z from 'zod';

export const RemoveInviteDTO = z.object({
    id:z.string().uuid()               
});

export type RemoveInvite = z.infer<typeof RemoveInviteDTO>