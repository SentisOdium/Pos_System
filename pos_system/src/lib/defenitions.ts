import {z} from 'zod';

export const SignupFormSchema = z.object({
    email:     z.string().email({message: "Please enter a Valid Email"}).trim(),
    password:  z.string()
                .min(12, { message: 'Be at least 12 characters long' })
                .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
                .regex(/[0-9]/, { message: 'Contain at least one number.' })
                .regex(/[^a-zA-Z0-9]/, {
                message: 'Contain at least one special character.',
                })
                .trim(),
})

export type FormState = 
| {
        errors?:{
                name?: string[]
                email?: string[]
                password?: string[]
        }
        message?: string
  }
| undefined