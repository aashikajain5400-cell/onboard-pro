import { z } from "zod";

export const personalInfoSchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().min(1, "Email is required.").email("Enter a valid email address."),
});

const accountDetailsObjectSchema = z.object({
  username: z
    .string()
    .min(1, "Username is required.")
    .regex(/^[a-zA-Z0-9_]{3,20}$/, "3-20 characters: letters, numbers, underscores."),
  password: z.string().min(8, "Use at least 8 characters."),
  confirmPassword: z.string().min(1, "Confirm your password."),
});

export const accountDetailsSchema = accountDetailsObjectSchema.refine(
  (data) => data.password === data.confirmPassword,
  { message: "Passwords don't match.", path: ["confirmPassword"] }
);

const reviewObjectSchema = z.object({
  agreeTerms: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms to continue." }),
  }),
});

export const reviewSchema = reviewObjectSchema;

// Full schema for the final submit, combining all steps' rules.
export const onboardingSchema = personalInfoSchema
  .merge(accountDetailsObjectSchema)
  .merge(reviewObjectSchema)
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ["confirmPassword"],
  });

export const stepSchemas = [personalInfoSchema, accountDetailsSchema, reviewSchema];
