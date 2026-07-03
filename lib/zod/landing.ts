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
        .min(1, "Select at least one interest"),
})

export const mediaValidation = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters!"),
    lastName: z.string().min(2, "Last name must be at least 2 characters!"),
    email: z.string().email("Email address is invalid format!"),
    phone: z.string().min(8, "Phone number is too short"),
    telegram: z.string().min(2, "Telegram username must be at least 2 characters!"),

    outletName: z.string().min(1, "Outlet name is required"),
    position: z.string().min(1, "Please select your position"),
    outletUrl: z.string().url("Please enter a valid URL (e.g., https://...)"),

    mediaFocus: z.array(z.string()).min(1, "Select at least one media focus"),
    socialMedia: z.array(z.string()).min(1, "Select at least one social media platform"),
    distribution: z.array(z.string()).min(1, "Select at least one distribution area"),

    audience: z.string().min(10, "Please provide more detail about your audience"),
    logo: z.string().url("Please provide a valid link to your logo"),

})


export const affiliateValidation = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters!"),
    lastName: z.string().min(2, "Last name must be at least 2 characters!"),
    email: z.string().email("Email address is invalid format!"),
    phone: z.string().min(8, "Phone number is too short"),
    telegram: z.string().min(2, "Telegram username must be at least 2 characters!"),
    country: z.string().min(1, "Please select your country"),

    companyName: z.string().min(1, "Company name is required"),
    companyWebsite: z.string().url("Please enter a valid URL (e.g., https://...)"),

    audience: z.string().min(10, "Please provide more detail about your audience"),

    platforms: z.array(z.string()).min(1, "Select at least one platform"),

    platformLinks: z.string().min(10, "Please provide your platform links"),
})
