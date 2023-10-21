import z from 'zod';

const phoneNumberRegex = new RegExp(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/)
export const UpdateStudentDTO = z.object({
    id:z.string().uuid("invalid id"),
    name:z.string().min(5, "the name of a student should contain at least 5 characters").nonempty(),             
    email:z.string().email("Invalid e-mail format").nonempty(),
    password:z.string().min(8, "invalid password").nonempty(),       
    registration:z.string().min(12).max(12).nonempty(),          
    course:z.string().min(3).nonempty(),         
    phoneNumber:z.string().regex(phoneNumberRegex, "invalid Phone Number.").optional() 
});

export type UpdateStudent = z.infer<typeof UpdateStudentDTO>

