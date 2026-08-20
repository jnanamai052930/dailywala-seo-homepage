'use client';

import { FormEvent, useRef, useState } from 'react';

type FormStatus =
  | { kind: 'idle'; message: '' }
  | { kind: 'success' | 'error'; message: string };

export function ContactForm() {
  const startedAt = useRef(Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>({ kind: 'idle', message: '' });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = Object.fromEntries(new FormData(form).entries());

    setIsSubmitting(true);
    setStatus({ kind: 'idle', message: '' });

    try {
      const response = await fetch('/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, startedAt: startedAt.current }),
      });
      const result = await response.json().catch(() => ({})) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || 'We could not send your enquiry. Please try again.');
      }

      form.reset();
      startedAt.current = Date.now();
      setStatus({
        kind: 'success',
        message: result.message || 'Thank you. Your enquiry has been sent to DailyWala.',
      });
    } catch (error) {
      setStatus({
        kind: 'error',
        message: error instanceof Error
          ? error.message
          : 'We could not send your enquiry. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="contact-form-panel">
      <div>
        <p className="eyebrow">Send an enquiry</p>
        <h2>Tell us what you need</h2>
        <p className="contact-form-intro">Share your requirements and the DailyWala team will contact you.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-grid">
          <label>
            <span>Name</span>
            <input name="name" type="text" autoComplete="name" maxLength={80} required />
          </label>
          <label>
            <span>Phone number</span>
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              maxLength={20}
              pattern="[+()0-9 .-]{7,20}"
              required
            />
          </label>
          <label>
            <span>Email <small>(optional)</small></span>
            <input name="email" type="email" autoComplete="email" maxLength={254} />
          </label>
          <label>
            <span>Location</span>
            <input name="location" type="text" autoComplete="address-level2" maxLength={120} required />
          </label>
          <label className="contact-form-wide">
            <span>Work or service needed</span>
            <input name="service" type="text" maxLength={160} required />
          </label>
          <label>
            <span>Preferred date <small>(optional)</small></span>
            <input name="preferredDate" type="date" />
          </label>
          <label className="contact-form-wide">
            <span>Message</span>
            <textarea name="message" rows={5} minLength={10} maxLength={2000} required />
          </label>
        </div>

        <label className="contact-form-trap" aria-hidden="true">
          <span>Company website</span>
          <input name="companyWebsite" type="text" tabIndex={-1} autoComplete="off" />
        </label>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending…' : 'Send enquiry'}
        </button>

        {status.kind !== 'idle' && (
          <p
            className={`contact-form-status is-${status.kind}`}
            role={status.kind === 'error' ? 'alert' : 'status'}
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
}
