import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Kerns Marketing',
  description: 'KM Business Development privacy policy. Learn how we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-white font-semibold text-lg hover:text-white/90 transition"
          >
            Kerns Marketing
          </Link>
          <span className="text-sm text-white/70">Privacy Policy</span>
        </div>
      </header>
      <div className="max-w-3xl mx-auto px-6 py-12">

        <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-white/50 text-sm mb-12">Last Updated: February 11th, 2026</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-white/80">
          <p>
            KM Business Development (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting it through this Privacy Policy. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website located at{' '}
            <a href="https://www.kmbizdev.com/blueprint" className="text-white underline hover:text-white/80">
              https://www.kmbizdev.com/blueprint
            </a>{' '}
            (the &quot;Website&quot;).
          </p>

          <p>
            By using this Website, you agree to the practices described in this Privacy Policy.
          </p>

          <section>
            <h2 className="text-xl font-bold text-white mt-10 mb-4">1. Information We Collect</h2>
            <p className="mb-4">We may collect the following types of information:</p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Personal Information</h3>
                <p className="mb-2">When you voluntarily provide it, including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-1 text-white/70">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Business or company information</li>
                  <li>Any information submitted through forms, applications, or contact requests</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Automatically Collected Information</h3>
                <p className="mb-2">When you access our Website, we may automatically collect:</p>
                <ul className="list-disc pl-6 space-y-1 text-white/70">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device information</li>
                  <li>Pages visited</li>
                  <li>Time spent on pages</li>
                  <li>Referral sources</li>
                  <li>Cookies and tracking technologies</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mt-10 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We may use your information to:</p>
            <ul className="list-disc pl-6 space-y-1 text-white/70">
              <li>Provide and improve our services</li>
              <li>Respond to inquiries or support requests</li>
              <li>Deliver requested content or resources</li>
              <li>Communicate marketing, promotional, or educational materials</li>
              <li>Analyze website performance and user behavior</li>
              <li>Prevent fraud and maintain security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mt-10 mb-4">3. Marketing Communications</h2>
            <p>
              By submitting your information, you consent to receive communications from us via email, phone, or SMS where permitted by law. You may opt out of marketing communications at any time by using unsubscribe links or contacting us directly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mt-10 mb-4">4. Cookies and Tracking Technologies</h2>
            <p className="mb-4">
              We use cookies and similar technologies to improve user experience, analyze traffic, and support marketing efforts. These technologies help us understand user preferences and optimize our Website.
            </p>
            <p>
              You may adjust your browser settings to disable cookies; however, some parts of the Website may not function properly if cookies are disabled.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mt-10 mb-4">5. Third-Party Services</h2>
            <p className="mb-4">
              We may share information with trusted third-party service providers that assist in operating our business and Website. These providers may include:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-white/70 mb-4">
              <li>Website hosting providers</li>
              <li>Analytics providers</li>
              <li>Email and CRM platforms</li>
              <li>Marketing automation platforms</li>
              <li>Payment processors (if applicable)</li>
            </ul>
            <p className="mb-4">
              These third parties are required to maintain the confidentiality of your information and only use it for authorized purposes.
            </p>
            <p>
              We may also use tools such as Google Analytics or similar technologies to understand Website usage trends.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mt-10 mb-4">6. Data Sharing and Disclosure</h2>
            <p className="mb-4">We do not sell personal information. We may share information only in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-1 text-white/70">
              <li>With service providers performing services on our behalf</li>
              <li>To comply with legal or regulatory requirements</li>
              <li>To protect rights, safety, or property</li>
              <li>In connection with a business transfer, merger, or acquisition</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mt-10 mb-4">7. Data Security</h2>
            <p>
              We implement commercially reasonable safeguards to protect your information. However, no internet transmission or storage system can be guaranteed 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mt-10 mb-4">8. Data Retention</h2>
            <p>
              We retain personal information only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mt-10 mb-4">9. Your Privacy Rights</h2>
            <p className="mb-4">
              Depending on your location, you may have rights to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-white/70 mb-4">
              <li>Request access to your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
            </ul>
            <p>
              To exercise these rights, contact us using the information below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mt-10 mb-4">10. Children&apos;s Privacy</h2>
            <p>
              This Website is not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mt-10 mb-4">11. External Links</h2>
            <p>
              Our Website may contain links to external websites. We are not responsible for the privacy practices of third-party websites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mt-10 mb-4">12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Updates will be posted on this page with a revised &quot;Last Updated&quot; date. Continued use of the Website after updates constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mt-10 mb-4">13. Contact Information</h2>
            <p className="mb-4">
              If you have questions about this Privacy Policy or how your information is handled, please contact:
            </p>
            <p className="text-white">
              <strong>KM Business Development</strong><br />
              Email:{' '}
              <a href="mailto:support@kmbizdev.com" className="text-white underline hover:text-white/80">
                support@kmbizdev.com
              </a>
              <br />
              Website:{' '}
              <a href="https://www.kmbizdev.com" className="text-white underline hover:text-white/80">
                https://www.kmbizdev.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <Link
            href="/"
            className="inline-block text-white/50 hover:text-white text-sm transition"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
