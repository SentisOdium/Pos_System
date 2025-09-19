import { z } from "zod";

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(32, { message: "Name must not exceed 32 characters" })
    .trim(),

  email: z
    .string()
    .email({ message: "Please enter a valid email" })
    .trim(),

  password: z
    .string()
    .min(12, { message: "Be at least 12 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter" })
    .regex(/[0-9]/, { message: "Contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, { message: "Contain at least one special character" })
    .trim(),
});

export const LoginFormSchema = z.object({

  email: z
    .string()
    .email({ message: "Please enter a valid email" })
    .trim(),

  password: z
    .string()
    .min(12, { message: "Be at least 12 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter" })
    .regex(/[0-9]/, { message: "Contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, { message: "Contain at least one special character" })
    .trim(),
});

export const UpdateFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" })
    .max(32, { message: "Name must not exceed 32 characters" })
    .trim(),

  email: z
    .string()
    .email({ message: "Please enter a valid email" })
    .trim(),

  contactNo: z
    .string()
    .regex(/^09\d{9}$/, { message: "Contact number must start with 09 and be 11 digits long" })
    .trim()
    .optional()
    .or(z.literal("")),

  password: z
    .string()
    .min(12, { message: "Be at least 12 characters long" })
    .regex(/[a-zA-Z]/, { message: "Contain at least one letter" })
    .regex(/[0-9]/, { message: "Contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, { message: "Contain at least one special character" })
    .trim(),

  description: z
    .string()
    .optional()
    .or(z.literal("")), //dunno what validation to put here, so its just needs to be string and trimmed or should this be skipped altogether?
  
    role: z
    .string()
    .min(4, {message: "Role Must be only \"user\" or \"admin\" "})
    .max(5, {message: "Role Must be only \"user\" or \"admin\" "})
    .trim(),
});

export const MenuFormSchema = z.object({
  sku: z.string().min(1, { message: "SKU is required" }).trim(),
  item: z.string().min(1, { message: "Item name is required" }).trim(),
  category: z.string().min(1, { message: "Category is required" }).trim(),
  quantity: z.number().min(0, { message: "Quantity must be 0 or more" }),
  price: z.number().min(0, { message: "Price must be 0 or more" }),
  description: z.string().trim(),
});