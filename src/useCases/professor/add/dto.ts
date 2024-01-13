import zod from 'zod';

export const AddProfessorDTO = zod.object({
    email: zod.string().min(1, "Você precisa informar um E-mail.")
    .email("E-mail inválido"),
    password:zod.string().min(8, "A senha deve ter ao menos 8 caracteres."),
    confirmPassword:zod.string().min(8, "As senhas não coincidem."),
    cpf:zod.string().min(11),
    name:zod.string().min(5, "Você precisa informar o seu nome."),
  
}).refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não coincidem.",
    path: ["confirmPassword"],
});

export type AddProfessor = zod.infer<typeof AddProfessorDTO>