import zod from 'zod';

export const AddAlunoDTO = zod.object({
    email: zod.string().min(1, "Você precisa informar um E-mail.")
    .email("E-mail inválido"),
    password:zod.string().min(8, "A senha deve ter ao menos 8 caracteres."),
    confirmPassword:zod.string().min(8, "As senhas não coincidem."),
    course:zod.string().min(3),
    name:zod.string().min(5, "Você precisa informar o seu nome."),
    registration:zod.string().min(12, "A matrícula deve ter ao menos 12 dígitos").max(12, "A matrícula deve ter no máximo 12 dígitos" ),
    phoneNumber:zod.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não coincidem.",
    path: ["confirmPassword"],
});

export type AddStudent = zod.infer<typeof AddAlunoDTO>

