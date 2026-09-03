import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd, SiteFooter, SiteHeader } from '../components';
import { siteConfig } from '../siteConfig';

const canonicalUrl = 'https://dailywala.in/terms';

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Read the Dailywala marketplace terms covering worker and crew bookings, wage estimates, overtime, payments, cancellations, safety, privacy, and grievances.',
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: 'website',
    url: canonicalUrl,
    title: 'Terms and Conditions | Dailywala',
    description: 'Terms for using Dailywala as a customer, worker, contractor, or service partner.',
  },
};

const sections = [
  ['marketplace-role', 'Dailywala’s role'],
  ['accounts', 'Accounts and eligibility'],
  ['crew-assignment', 'Crew assignment and availability'],
  ['wages', 'Wage estimates and final wage'],
  ['overtime', 'Overtime'],
  ['payments', 'Payments, cancellation and refunds'],
  ['responsibilities', 'User responsibilities and safety'],
  ['privacy-policy', 'Privacy and communications'],
  ['liability', 'Service limitations'],
  ['grievances', 'Support and grievances'],
] as const;

export default function TermsPage() {
  const termsPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Dailywala Terms and Conditions',
    url: canonicalUrl,
    dateModified: '2026-09-03',
    publisher: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.domain },
  };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="legal-hero" aria-labelledby="terms-page-title">
          <div>
            <p className="eyebrow">Clear terms. Fair expectations.</p>
            <h1 id="terms-page-title">Terms and Conditions</h1>
            <p>
              These terms explain how Dailywala works for customers, workers, contractors, and other service partners.
              Please read them before creating an account, making a request, accepting work, or using the platform.
            </p>
          </div>
        </section>

        <section className="legal-shell">
          <aside className="legal-toc" aria-label="Terms contents">
            <strong>Terms &amp; Policies</strong>
            <ol>
              {sections.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}
            </ol>
          </aside>

          <article className="legal-document" id="terms-of-use">
            <div className="legal-notice">
              <strong>Important booking summary</strong>
              <p>
                Worker availability can change. Displayed wages are estimates. Confirm the actual worker or crew, work
                scope, duration, and final wage at the work site before work begins. Overtime is additional and is
                payable at the applicable rate defined in the Dailywala system.
              </p>
            </div>

            <section>
              <h2>1. Acceptance of these terms</h2>
              <p>
                By accessing or using Dailywala’s website, applications, communications, or services, you agree to
                these Terms and Conditions. “Dailywala”, “we”, “us”, and “our” refer to the operator of the Dailywala
                platform. “User” includes a customer, worker, contractor, crew leader, or other service partner.
              </p>
              <p>If you do not agree, do not use the platform. Mandatory rights available under applicable law remain unaffected.</p>
            </section>

            <section id="marketplace-role">
              <h2>2. Dailywala’s marketplace role</h2>
              <p>
                Dailywala provides technology and operational support to help users discover, request, match, assign,
                coordinate, and pay for workforce services. Unless a specific service expressly states otherwise,
                workers and service partners provide the work independently and are not employees of Dailywala,
                subject always to the actual relationship and applicable law.
              </p>
              <p>
                Profiles, availability, ratings, skills, prices, and verification indicators are based on information
                available to the platform. They support informed selection but are not an unconditional guarantee of
                identity, conduct, workmanship, continued availability, or a particular outcome.
              </p>
            </section>

            <section id="accounts">
              <h2>3. Accounts, eligibility and accurate information</h2>
              <ul>
                <li>You must be at least 18 years old and legally capable of entering into a contract.</li>
                <li>Provide accurate contact, identity, skill, work-site, availability, and payment information.</li>
                <li>Keep OTPs and account access secure. Do not transfer or impersonate another user’s account.</li>
                <li>Tell us promptly about unauthorised access or materially incorrect account information.</li>
              </ul>
            </section>

            <section id="crew-assignment">
              <h2>4. Crew requests, assignment and availability</h2>
              <p>
                A request records your requirement; it does not guarantee that every selected or displayed worker will
                remain available. Dailywala may adjust, replace, reduce, or re-match workers when availability changes,
                a worker declines, a verification or safety concern arises, or the requirement changes. We will provide
                an assignment update through the app or your permitted communication channel where reasonably possible.
              </p>
              <p>
                On arrival, the customer should check the assigned worker or crew details shown in Dailywala before
                allowing work to begin. If an unexpected person arrives or the confirmed skill does not match the
                request, pause the job and contact Dailywala support.
              </p>
            </section>

            <section id="wages">
              <h2>5. Wage estimates and final wage</h2>
              <p>
                Any wage displayed before arrival is an estimate based on the requested crew, expected duration,
                selected skills, and rates available when the request is created. It may change when the actual worker
                or crew is confirmed, availability changes, or the scope or duration changes.
              </p>
              <p>
                After the actual worker or crew reaches the work site, the customer and service partner must mutually
                confirm the final wage, scope, and expected duration before work begins. If no agreement is reached,
                work should not begin; use Dailywala support to report or resolve the issue. Users must not demand or
                impose undisclosed or unauthorised charges.
              </p>
            </section>

            <section id="overtime">
              <h2>6. Overtime and additional work</h2>
              <p>
                Work beyond the scheduled working hours is overtime (“OT”). OT wages are additional to the confirmed
                base wage and must be paid at the applicable rate defined in the Dailywala system. The customer and
                service partner should confirm overtime before the additional work begins.
              </p>
              <p>Material additions to the work scope may require a revised request, duration, crew, or price.</p>
            </section>

            <section id="payments">
              <h2>7. Payments, fees, cancellation and refunds</h2>
              <ul>
                <li>Pay only through methods offered for the relevant Dailywala flow or as specifically instructed in the request.</li>
                <li>Platform fees, taxes, worker amounts, discounts, and payment timing may vary by service and will be shown where applicable.</li>
                <li>Cancellation charges or reduced refunds may apply after payment, assignment, travel, arrival, or work commencement.</li>
                <li>Approved refunds are returned through the supported payment route and may take the processing time stated by the payment provider.</li>
                <li>Raise payment discrepancies promptly with the request ID and payment reference, without sharing OTPs or card credentials.</li>
              </ul>
            </section>

            <section id="responsibilities">
              <h2>8. User responsibilities, conduct and safety</h2>
              <p>Customers must provide lawful work, accurate site details, reasonable access, a safe work environment, and any agreed tools or materials.</p>
              <p>Workers and service partners must represent their skills honestly, attend confirmed work responsibly, follow lawful site rules, and perform with reasonable care.</p>
              <p>
                No user may engage in harassment, discrimination, threats, violence, fraud, unsafe work, illegal activity,
                forced labour, child labour, account misuse, platform manipulation, or unauthorised collection or sharing
                of personal information. For immediate danger or an emergency, contact the appropriate local authority first.
              </p>
            </section>

            <section>
              <h2>9. Reviews, content and platform use</h2>
              <p>
                Reviews and information submitted by users must be truthful, relevant, and lawful. You grant Dailywala
                permission to host and display submitted content for operating and improving the platform. We may remove
                misleading, abusive, unlawful, privacy-invasive, or manipulated content and may restrict accounts that
                breach these terms or create safety, fraud, or legal risk.
              </p>
            </section>

            <section id="privacy-policy">
              <h2>10. Privacy, location and communications</h2>
              <p>
                We process information needed to operate Dailywala, including account and contact details, worker skills
                and verification information, work locations, booking and assignment records, payment references,
                consent choices, support messages, and device or usage data. We use it to authenticate users, match and
                fulfil requests, process payments, prevent misuse, provide support, communicate service updates, comply
                with law, and improve platform reliability.
              </p>
              <p>
                Relevant information may be shared with the customer or service partner involved in a request, and with
                authorised vendors supporting payments, hosting, analytics, messaging, security, or customer support.
                We may also disclose information when lawfully required. We limit sharing to what is reasonably needed
                for the stated purpose and retain information according to operational, safety, dispute, and legal needs.
              </p>
              <p>
                Location access is used only with device permission. WhatsApp service updates are sent when you provide
                service consent; promotional messages require the applicable marketing consent. You may withdraw optional
                consent or request access, correction, or deletion by contacting support, subject to legal and legitimate
                retention requirements. Essential transactional communications may still be required to complete an active request.
              </p>
            </section>

            <section id="liability">
              <h2>11. Availability, warranties and responsibility</h2>
              <p>
                Dailywala aims to provide a reliable platform, but availability, matching, arrival time, and work outcomes
                depend on users and circumstances outside our reasonable control. The platform may occasionally be
                interrupted for maintenance, security, network, provider, or operational reasons.
              </p>
              <p>
                To the extent permitted by law, each user remains responsible for their own acts, omissions, agreements,
                property, tools, safety obligations, and payment commitments. Nothing in these terms excludes liability
                or consumer remedies that cannot lawfully be excluded, including responsibility for fraud, wilful misconduct,
                or other non-excludable liability.
              </p>
            </section>

            <section id="grievances">
              <h2>12. Support, grievances and disputes</h2>
              <p>
                Contact Dailywala support first so we can review the account, request, assignment, payment, safety, privacy,
                or communication issue. Include the request ID and a clear description, but never send an OTP, password,
                full card details, or other unnecessary sensitive information.
              </p>
              <div className="legal-contact">
                <p><strong>Grievance contact:</strong> Dailywala Support</p>
                <p><a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a></p>
                <p><a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a></p>
              </div>
              <p>
                These terms are governed by applicable laws of India. Disputes are subject to competent courts and
                statutory forums under applicable law. Nothing here prevents a consumer from using remedies available
                through a consumer commission or another legally authorised forum.
              </p>
            </section>

            <section>
              <h2>13. Changes to these terms</h2>
              <p>
                We may update these terms to reflect changes in law, platform features, pricing structures, safety
                controls, or operations. The updated page will show its effective date. Where required, we will provide
                additional notice or obtain consent. Continued use after an effective update means you accept the revised terms.
              </p>
            </section>

            <div className="legal-endnote">
              <p>Questions about these terms?</p>
              <Link className="primary-action" href="/contact/">Contact Dailywala</Link>
            </div>
            <p className="legal-effective">Effective and last updated: 3 September 2026</p>
          </article>
        </section>
      </main>
      <SiteFooter />
      <JsonLd data={termsPage} />
    </>
  );
}
