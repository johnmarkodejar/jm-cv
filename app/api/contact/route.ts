import { NextResponse } from "next/server";
import type { ContactFormData } from "@/types";

export async function POST(req: Request) {
  try {
    const body: ContactFormData = await req.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Resend integration — set RESEND_API_KEY and FROM_EMAIL in environment
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.FROM_EMAIL ?? "onboarding@resend.dev";
    const toEmail = process.env.TO_EMAIL ?? "johnmarkodejar@gmail.com";

    if (apiKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);

      await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        replyTo: body.email,
        subject: `Portfolio Contact: ${body.name}${body.company ? ` from ${body.company}` : ""}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <table cellpadding="8" style="border-collapse:collapse;width:100%">
            <tr><td><strong>Name</strong></td><td>${body.name}</td></tr>
            <tr><td><strong>Company</strong></td><td>${body.company || "—"}</td></tr>
            <tr><td><strong>Email</strong></td><td>${body.email}</td></tr>
            <tr><td><strong>Phone</strong></td><td>${body.phone || "—"}</td></tr>
            <tr><td><strong>Budget</strong></td><td>${body.budget || "—"}</td></tr>
          </table>
          <h3>Message</h3>
          <p style="white-space:pre-wrap">${body.message}</p>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
