import z from 'zod';

const phoneNumberRegex = new RegExp(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/)
export const AddAlunoDTO = z.object({
    name:z.string().min(5, "the name of a student should contain at least 5 characters").nonempty(),             
    email:z.string().email("Invalid e-mail format").nonempty(),
    password:z.string().min(8, "invalid password").nonempty(),       
    registration:z.string().min(12, "the registration should be at least 12 characters"),          
    course:z.string().min(3).nonempty(),         
    phoneNumber:z.string().regex(phoneNumberRegex, "invalid Phone Number.").optional() 
});

export type AddStudent = z.infer<typeof AddAlunoDTO>

