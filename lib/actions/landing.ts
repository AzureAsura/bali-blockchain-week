'use server'

import { redirect } from "next/navigation";
import { affiliateValidation, mediaValidation, sponsorValidation } from "../zod/landing"
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
            to: ['info@baliblockchainweeks.com'],
            subject: `Sponsorship Inquiry: ${validatedData.data.company}`,
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 1000px; margin: 0 auto; border: 1px solid #f0f0f0; padding: 24px; border-radius: 12px;">
                    <h2 style="color: #000; margin-top: 0; border-bottom: 2px solid #f97316; padding-bottom: 10px; display: inline-block;">
                        Sponsorship Inquiry
                    </h2>
                    <p style="color: #666; font-size: 15px;">A new partnership request has been submitted via the website. Details are provided below:</p>
                    
                    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                    <tr>
                        <td style="padding: 8px 0; color: #888; font-size: 14px; white-space: nowrap; width: 100px;">Full Name</td>
                        <td style="padding: 8px 0; color: #000; font-size: 14px; font-weight: 600;">: ${validatedData.data.firstName} ${validatedData.data.lastName}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #888; font-size: 14px; white-space: nowrap;">Email</td>
                        <td style="padding: 8px 0; color: #f97316; font-size: 14px; font-weight: 600;">: <a href="mailto:${validatedData.data.email}" style="color: #f97316; text-decoration: none;">${validatedData.data.email}</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #888; font-size: 14px; white-space: nowrap;">Telegram</td>
                        <td style="padding: 8px 0; color: #000; font-size: 14px;">: ${validatedData.data.telegram}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #888; font-size: 14px; white-space: nowrap;">Position</td>
                        <td style="padding: 8px 0; color: #000; font-size: 14px;">: ${validatedData.data.position}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #888; font-size: 14px; white-space: nowrap;">Company</td>
                        <td style="padding: 8px 0; color: #000; font-size: 14px; font-weight: 600;">: ${validatedData.data.company}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0; color: #888; font-size: 14px; white-space: nowrap;">Focus</td>
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
            return {
                success: false,
                message: "Failed to send email. Please try again later."
            }
        }



        return {
            success: true,
            message: "Thank you! Our team will get back to you shortly."
        }


    } catch (error) {
        return {
            success: false,
            message: "A system error occurred. Please try again."
        }
    }


}

export const mediaFunction = async (prevState: any, formData: FormData) => {


    const rawData = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        telegram: formData.get("telegram"),

        outletName: formData.get("outletName"),
        position: formData.get("position"),
        outletUrl: formData.get("outletUrl"),

        mediaFocus: formData.getAll("mediaFocus"),
        socialMedia: formData.getAll("socialMedia"),
        distribution: formData.getAll("distribution"),

        logo: formData.get("logo"),

        audience: formData.get("audience"),
    }

    const validatedData = mediaValidation.safeParse((rawData))

    if (!validatedData.success) {
        return {
            error: validatedData.error.flatten().fieldErrors
        }
    }

    try {

        const { data, error } = await resend.emails.send({
            from: 'Bali Blockchain Weeks <onboarding@resend.dev>',
            to: ['info@baliblockchainweeks.com'],
            subject: `Media Partner Request: ${validatedData.data.outletName}`,
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 1000px; margin: 0 auto; border: 1px solid #f0f0f0; padding: 24px; border-radius: 12px;">
                    <h2 style="color: #000; margin-top: 0; border-bottom: 2px solid #f97316; padding-bottom: 10px; display: inline-block;">
                        Media Partner Inquiry
                    </h2>
                    <p style="color: #666; font-size: 15px;">A new media partnership request has been submitted. Details are provided below:</p>
                    
                    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                        <tr>
                            <td style="padding: 8px 0; color: #888; font-size: 14px; white-space: nowrap; width: 120px;">Full Name</td>
                            <td style="padding: 8px 0; color: #000; font-size: 14px; font-weight: 600;">: ${validatedData.data.firstName} ${validatedData.data.lastName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #888; font-size: 14px; white-space: nowrap;">Email</td>
                            <td style="padding: 8px 0; color: #f97316; font-size: 14px; font-weight: 600;">: <a href="mailto:${validatedData.data.email}" style="color: #f97316; text-decoration: none;">${validatedData.data.email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #888; font-size: 14px; white-space: nowrap;">Phone / WA</td>
                            <td style="padding: 8px 0; color: #000; font-size: 14px;">: +62 ${validatedData.data.phone}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #888; font-size: 14px; white-space: nowrap;">Telegram</td>
                            <td style="padding: 8px 0; color: #000; font-size: 14px;">: ${validatedData.data.telegram}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #888; font-size: 14px; white-space: nowrap; width: 120px;">Outlet Name</td>
                            <td style="padding: 8px 0; color: #000; font-size: 14px; font-weight: 600;">: ${validatedData.data.outletName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #888; font-size: 14px; white-space: nowrap;">Position</td>
                            <td style="padding: 8px 0; color: #000; font-size: 14px;">: ${validatedData.data.position}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0; color: #888; font-size: 14px; white-space: nowrap;">Outlet URL</td>
                            <td style="padding: 8px 0; color: #f97316; font-size: 14px;">: <a href="${validatedData.data.outletUrl}" style="color: #f97316;">${validatedData.data.outletUrl}</a></td>
                        </tr>
                    </table>

                    <div style="margin-top: 20px; padding: 15px; background-color: #fcfcfc; border-left: 4px solid #f97316; border-radius: 4px; margin-bottom: 10px;">
                        <strong style="font-size: 14px; color: #000;">Media Focus:</strong>
                        <p style="margin: 5px 0 0 0; color: #444; font-size: 14px;">${validatedData.data.mediaFocus.join(", ")}</p>
                    </div>

                    <div style="margin-top: 10px; padding: 15px; background-color: #fcfcfc; border-left: 4px solid #f97316; border-radius: 4px; margin-bottom: 10px;">
                        <strong style="font-size: 14px; color: #000;">Social Media & Distribution:</strong>
                        <p style="margin: 5px 0 0 0; color: #444; font-size: 14px;">Platforms: ${validatedData.data.socialMedia.join(", ")}</p>
                        <p style="margin: 5px 0 0 0; color: #444; font-size: 14px;">Scale: ${validatedData.data.distribution.join(", ")}</p>
                    </div>

                    <div style="margin-top: 10px; padding: 15px; background-color: #fcfcfc; border-left: 4px solid #f97316; border-radius: 4px;">
                        <strong style="font-size: 14px; color: #000;">Audience Detail:</strong>
                        <p style="margin: 5px 0 0 0; color: #444; font-size: 14px;">${validatedData.data.audience}</p>
                    </div>

                    <div style="margin-top: 20px;">
                        <strong style="font-size: 14px; color: #000;">Media Logo:</strong>
                        <p style="margin: 5px 0 0 0; color: #f97316; font-size: 14px;"><a href="${validatedData.data.logo}" style="color: #f97316;">View Logo Attachment</a></p>
                    </div>

                    <div style="margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px; text-align: center;">
                        <p style="font-size: 11px; color: #aaa; text-transform: uppercase; letter-spacing: 1px;">
                            Bali Blockchain Weeks 2026 • Automated Notification
                        </p>
                    </div>
                </div>
            `
        })

        if (error) {
            return {
                success: false,
                message: "Failed to send email. Please try again later."
            }
        }

        return {
            success: true,
            message: "Thank you! Our team will get back to you shortly."
        }


    } catch (error) {
        return {
            success: false,
            message: "A system error occurred. Please try again."
        }
    }


}

export const affiliateFunction = async (prevState: any, formData: FormData) => {

    const rawData = {
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        telegram: formData.get("telegram"),
        country: formData.get("country"),

        companyName: formData.get("companyName"),
        companyWebsite: formData.get("companyWebsite"),

        audience: formData.get("audience"),

        platforms: formData.getAll("platforms"),

        platformLinks: formData.get("platformLinks"),
    }

    const validatedData = affiliateValidation.safeParse((rawData))

    if (!validatedData.success) {
        return {
            error: validatedData.error.flatten().fieldErrors
        }
    }

    try {

        const { data, error } = await resend.emails.send({
            from: 'Bali Blockchain Weeks <onboarding@resend.dev>',
            to: ['info@baliblockchainweeks.com'],
            subject: `Affiliate Request: ${validatedData.data.companyName}`,
            html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 1000px; margin: 0 auto; border: 1px solid #f0f0f0; padding: 24px; border-radius: 12px;">
            <h2 style="color: #000; margin-top: 0; border-bottom: 2px solid #f97316; padding-bottom: 10px; display: inline-block;">
                Affiliate Inquiry
            </h2>
            <p style="color: #666; font-size: 15px;">A new affiliate request has been submitted. Details are provided below:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <tr>
                    <td style="padding: 8px 0; color: #888; font-size: 14px; white-space: nowrap; width: 160px;">Full Name</td>
                    <td style="padding: 8px 0; color: #000; font-size: 14px; font-weight: 600;">: ${validatedData.data.firstName} ${validatedData.data.lastName}</td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; color: #888; font-size: 14px; white-space: nowrap;">Email</td>
                    <td style="padding: 8px 0; color: #f97316; font-size: 14px; font-weight: 600;">: <a href="mailto:${validatedData.data.email}" style="color: #f97316; text-decoration: none;">${validatedData.data.email}</a></td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; color: #888; font-size: 14px; white-space: nowrap;">Phone / WA</td>
                    <td style="padding: 8px 0; color: #000; font-size: 14px;">: ${validatedData.data.phone}</td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; color: #888; font-size: 14px; white-space: nowrap;">Telegram</td>
                    <td style="padding: 8px 0; color: #000; font-size: 14px;">: ${validatedData.data.telegram}</td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; color: #888; font-size: 14px; white-space: nowrap;">Country</td>
                    <td style="padding: 8px 0; color: #000; font-size: 14px;">: ${validatedData.data.country}</td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; color: #888; font-size: 14px; white-space: nowrap;">Company Name</td>
                    <td style="padding: 8px 0; color: #000; font-size: 14px; font-weight: 600;">: ${validatedData.data.companyName}</td>
                </tr>
                <tr>
                    <td style="padding: 8px 0; color: #888; font-size: 14px; white-space: nowrap;">Company Website</td>
                    <td style="padding: 8px 0; color: #f97316; font-size: 14px;">: <a href="${validatedData.data.companyWebsite}" style="color: #f97316;">${validatedData.data.companyWebsite}</a></td>
                </tr>
            </table>

            <div style="margin-top: 20px; padding: 15px; background-color: #fcfcfc; border-left: 4px solid #f97316; border-radius: 4px; margin-bottom: 10px;">
                <strong style="font-size: 14px; color: #000;">Audience:</strong>
                <p style="margin: 5px 0 0 0; color: #444; font-size: 14px;">${validatedData.data.audience}</p>
            </div>

            <div style="margin-top: 10px; padding: 15px; background-color: #fcfcfc; border-left: 4px solid #f97316; border-radius: 4px; margin-bottom: 10px;">
                <strong style="font-size: 14px; color: #000;">Platforms:</strong>
                <p style="margin: 5px 0 0 0; color: #444; font-size: 14px;">${validatedData.data.platforms.join(", ")}</p>
            </div>

            <div style="margin-top: 10px; padding: 15px; background-color: #fcfcfc; border-left: 4px solid #f97316; border-radius: 4px;">
                <strong style="font-size: 14px; color: #000;">Platform Links:</strong>
                <p style="margin: 5px 0 0 0; color: #444; font-size: 14px; white-space: pre-line;">${validatedData.data.platformLinks}</p>
            </div>

            <div style="margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px; text-align: center;">
                <p style="font-size: 11px; color: #aaa; text-transform: uppercase; letter-spacing: 1px;">
                    Bali Blockchain Weeks 2026 • Automated Notification
                </p>
            </div>
        </div>
    `
        })

        if (error) {
            return {
                success: false,
                message: "Failed to send email. Please try again later."
            }
        }

        return {
            success: true,
            message: "Thank you! Our team will get back to you shortly."
        }

    } catch (error) {
        return {
            success: false,
            message: "A system error occurred. Please try again."
        }
    }



}