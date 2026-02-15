'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle, Mail, Instagram, Sparkles, BookOpen, MessageCircle, Calendar } from 'lucide-react';

// Declare fbq for Meta Pixel
declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

export default function ThankYou99Page() {
  // Track purchase conversion on page load
  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Purchase', {
        value: 99,
        currency: 'USD',
        content_name: 'IG Branding Program',
        content_category: 'Course',
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <header className="border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-white font-semibold text-lg">
            Kerns Marketing
          </Link>
          <Link
            href="/privacy-policy"
            className="text-sm text-white hover:text-white/90 transition"
          >
            Privacy Policy
          </Link>
        </div>
      </header>
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-green-400 text-sm font-medium">Payment Complete!</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Welcome to the IG Branding Program
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Thank you for your purchase! You now have full access to the program.
          </p>
        </div>

        {/* What's Included */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-amber-400" />
            What You Got
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <BookOpen className="w-6 h-6 text-white/60 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white">Access to KM Course</h3>
                <p className="text-white/50 text-sm">Full access to our proven Instagram branding system.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <MessageCircle className="w-6 h-6 text-white/60 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-white">Access to KM Engagement Chat</h3>
                <p className="text-white/50 text-sm">Join our community and get ongoing support.</p>
              </div>
              <a
                href="https://chat.whatsapp.com/FOmrvaHVXd94FdhX1ZthEY?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3 px-6 rounded-xl transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Join Engagement Group Here
              </a>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <Calendar className="w-6 h-6 text-white/60 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white">30-Min Brand Analysis</h3>
                <p className="text-white/50 text-sm">Book your free strategy call with Cody and the team.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Schedule Your Brand Analysis
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Book your free 30-minute call to discuss your goals and get a custom strategy.
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            <iframe
              src="https://calendly.com/kmbizdev/30min?hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=ffffff"
              width="100%"
              height="700"
              frameBorder="0"
              title="Schedule a call"
              className="relative z-10"
            />
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-3">
              Questions? We&apos;re Here to Help
            </h3>
            <p className="text-white/50">
              Reach out anytime. Check your email for access details.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:support@kmbizdev.com"
              className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-3 px-6 rounded-xl transition-all"
            >
              <Mail className="w-5 h-5 text-white/60" />
              support@kmbizdev.com
            </a>
            <a
              href="https://instagram.com/kmbizdev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium py-3 px-6 rounded-xl transition-all"
            >
              <Instagram className="w-5 h-5 text-white/60" />
              @kmbizdev
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
