import z from "zod";

export const sponsorValidation = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters!"),
    lastName: z.string().min(2, "Last name must be at least 2 characters!"),
    email: z.string().email("Email address is invalid format!"),
    telegram: z.string().min(2, "Telegram username must be at least 2 characters!"),
    position: z.string().min(1, "Position is required"),
    company: z.string().min(1, "Company is required"),
    companyFocus: z.string().min(1, "Company focus is required"),
    interests: z
        .array(z.string())
        .min(1, "At least one interest is required"),
})