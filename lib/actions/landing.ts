'use server'

import { redirect } from "next/navigation";
import { sponsorValidation } from "../zod/landing"
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export const sponsorFunction = async (prevState: any, formData: FormData) => {

    const rawData = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        telegram: formData.get("telegram"),
        position: formData.get("position"),
        company: formData.get("company"),
        companyFocus: formData.get("companyFocus"),
        interests: formData.getAll("interests"),
    }

    const validatedData = sponsorValidation.safeParse(rawData)


    if (!validatedData.success) {
        return {
            error: validatedData.error.flatten().fieldErrors
        }
    }

    try {

        const { data, error } = await resend.emails.send({
            from: 'Bali Blockchain Weeks <onboarding@resend.dev>',
            to: ['paramsuraqutay@gmail.com'],
            subject: `Sponsorship Inquiry: ${validatedData.data.company}`,
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; border: 1px solid #f0f0f0; padding: 24px; border-radius: 12px;">
                    <h2 style="color: #000; margin-top: 0; border-bottom: 2px solid #f97316; padding-bottom: 10px; display: inline-block;">
                        Sponsorship Inquiry
                    </h2>
                    <p style="color: #666; font-size: 15px;">A new partnership request has been submitted via the website. Details are provided below:</p>
                    
                    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                        <tr>
                            <td style="padding: 8px 0; color: #888; font-size: 14px; width: 140px;">Full Name</td>
                            <td style="padding: 8px 0; color: #000; font-size: 14px; font-weight: 600;">: ${validatedData.data.firstName} ${validatedData.data.lastName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #888; font-size: 14px;">Email</td>
                            <td style="padding: 8px 0; color: #f97316; font-size: 14px; font-weight: 600;">: ${validatedData.data.email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #888; font-size: 14px;">Telegram</td>
                            <td style="padding: 8px 0; color: #000; font-size: 14px;">: ${validatedData.data.telegram}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #888; font-size: 14px;">Position</td>
                            <td style="padding: 8px 0; color: #000; font-size: 14px;">: ${validatedData.data.position}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #888; font-size: 14px;">Company</td>
                            <td style="padding: 8px 0; color: #000; font-size: 14px; font-weight: 600;">: ${validatedData.data.company}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #888; font-size: 14px;">Company Focus</td>
                            <td style="padding: 8px 0; color: #000; font-size: 14px;">: ${validatedData.data.companyFocus}</td>
                        </tr>
                    </table>

                    <div style="margin-top: 20px; padding: 15px; background-color: #fcfcfc; border-left: 4px solid #f97316; border-radius: 4px;">
                        <strong style="font-size: 14px; color: #000;">Interested in:</strong>
                        <p style="margin: 5px 0 0 0; color: #444; font-size: 14px;">${validatedData.data.interests.join(", ")}</p>
                    </div>

                    <div style="margin-top: 40px; border-top: 1px solid #eee; pt: 20px; text-align: center;">
                        <p style="font-size: 11px; color: #aaa; text-transform: uppercase; letter-spacing: 1px;">
                            Bali Blockchain Weeks 2026 • Automated Notification
                        </p>
                    </div>
                </div>
            `
        });

        if (error) {
            console.log(error)
        }

      

    } catch (error) {
        console.log(error)
    }

    redirect('/')




}