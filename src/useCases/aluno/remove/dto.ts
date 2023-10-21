import z from 'zod';

const phoneNumberRegex = new RegExp(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/)
export const RemoveStudentDTO = z.object({
    id:z.string().uuid()               
});

export type RemoveStudent = z.infer<typeof RemoveStudentDTO>