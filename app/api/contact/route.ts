import nodemailer from 'nodemailer';
import { siteConfig } from '../../siteConfig';

export const runtime = 'nodejs';

const MAX_BODY_BYTES = 16_000;
const MIN_SUBMIT_TIME_MS = 1_500;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1_000;
const RATE_LIMIT_MAX = 5;

type RateLimitEntry = { count: number; resetAt: number };

const rateLimits = new Map<string, RateLimitEntry>();

function json(message: string, status: number) {
  return Response.json(
    { message },
    { status, headers: { 'Cache-Control': 'no-store' } },
  );
}

function field(value: unknown, maxLength: number): string {
  if (typeof value !== 'string' || value.length > maxLength) return '';
  return value.trim().replace(/\r\n?/g, '\n');
}

function singleLineField(value: unknown, maxLength: number): string {
  return field(value, maxLength).replace(/[\n\u0000-\u001f\u007f]+/g, ' ');
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  })[character] || character);
}

function hasValidOrigin(request: Request): boolean {
  const origin = request.headers.get('Origin');
  if (!origin) return true;

  try {
    const originHost = new URL(origin).host;
    const forwardedHost = request.headers.get('X-Forwarded-Host')?.split(',')[0].trim();
    const requestHost = forwardedHost || request.headers.get('Host') || new URL(request.url).host;
    return originHost === requestHost;
  } catch {
    return false;
  }
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const current = rateLimits.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  current.count += 1;
  return current.count > RATE_LIMIT_MAX;
}

export async function POST(request: Request) {
  if (!hasValidOrigin(request)) {
    return json('This request is not allowed.', 403);
  }

  if (!request.headers.get('Content-Type')?.toLowerCase().startsWith('application/json')) {
    return json('Invalid form submission.', 415);
  }

  const contentLength = Number(request.headers.get('Content-Length') || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return json('The form submission is too large.', 413);
  }

  let body: Record<string, unknown>;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
      return json('The form submission is too large.', 413);
    }
    const parsedBody: unknown = JSON.parse(rawBody);
    if (!parsedBody || typeof parsedBody !== 'object' || Array.isArray(parsedBody)) {
      return json('Invalid form submission.', 400);
    }
    body = parsedBody as Record<string, unknown>;
  } catch {
    return json('Invalid form submission.', 400);
  }

  const companyWebsite = field(body.companyWebsite, 200);
  const startedAt = typeof body.startedAt === 'number' ? body.startedAt : 0;
  if (companyWebsite || !startedAt || Date.now() - startedAt < MIN_SUBMIT_TIME_MS) {
    return json('Thank you. Your enquiry has been sent to DailyWala.', 200);
  }

  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  if (isRateLimited(ip)) {
    return json('Too many enquiries were sent. Please wait a few minutes and try again.', 429);
  }

  const name = singleLineField(body.name, 80);
  const phone = singleLineField(body.phone, 20);
  const email = singleLineField(body.email, 254);
  const location = singleLineField(body.location, 120);
  const service = singleLineField(body.service, 160);
  const preferredDate = singleLineField(body.preferredDate, 10);
  const message = field(body.message, 2000);

  const validPhone = /^[+()0-9 .-]{7,20}$/.test(phone);
  const validEmail = !email || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validDate = !preferredDate || /^\d{4}-\d{2}-\d{2}$/.test(preferredDate);

  if (!name || !validPhone || !validEmail || !location || !service || !validDate || message.length < 10) {
    return json('Please check the required fields and try again.', 400);
  }

  const submittedAt = new Date().toISOString();
  const text = [
    'New DailyWala website enquiry',
    '',
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email || 'Not provided'}`,
    `Location: ${location}`,
    `Work or service needed: ${service}`,
    `Preferred date: ${preferredDate || 'Not provided'}`,
    '',
    'Message:',
    message,
    '',
    `Submitted: ${submittedAt}`,
  ].join('\n');

  const rows = [
    ['Name', name],
    ['Phone', phone],
    ['Email', email || 'Not provided'],
    ['Location', location],
    ['Work or service needed', service],
    ['Preferred date', preferredDate || 'Not provided'],
    ['Submitted', submittedAt],
  ].map(([label, value]) => (
    `<tr><th style="padding:8px 12px;text-align:left;vertical-align:top">${escapeHtml(label)}</th>`
    + `<td style="padding:8px 12px">${escapeHtml(value)}</td></tr>`
  )).join('');

  const html = [
    '<div style="font-family:Arial,sans-serif;color:#111827">',
    '<h1 style="font-size:22px">New DailyWala website enquiry</h1>',
    `<table style="border-collapse:collapse">${rows}</table>`,
    '<h2 style="font-size:18px;margin-top:24px">Message</h2>',
    `<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    '</div>',
  ].join('');

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const recipient = process.env.CONTACT_TO_EMAIL || siteConfig.email;

  if (!gmailUser || !gmailAppPassword) {
    console.error('Gmail SMTP credentials are not configured.');
    return json('Email service is temporarily unavailable. Please call or email DailyWala directly.', 503);
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });

    await transporter.sendMail({
      to: recipient,
      from: `"DailyWala Website" <${gmailUser}>`,
      subject: `Website enquiry: ${service}`,
      text,
      html,
      ...(email ? { replyTo: email } : {}),
    });

    return json('Thank you. Your enquiry has been sent to DailyWala.', 200);
  } catch (error) {
    console.error('Unable to send contact enquiry email.', error);
    return json('We could not send your enquiry. Please call or email DailyWala directly.', 502);
  }
}
