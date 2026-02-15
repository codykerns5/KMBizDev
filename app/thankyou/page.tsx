'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Download, CheckCircle, Mail, Phone, Instagram } from 'lucide-react';
import Image from 'next/image';

// Declare fbq for Meta Pixel
declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

export default function ThankYouPage() {
  // Track conversion on page load
  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Blueprint Download',
        content_category: 'Lead Generation',
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
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6 ml-4">
            <span className="text-green-400 text-sm font-medium">Success!</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            You&apos;re All Set!
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Thank you for downloading the Instagram Do&apos;s & Don&apos;ts Blueprint. 
            Your guide is ready below.
          </p>
        </div>

        {/* Download Section */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-32 h-32 flex-shrink-0">
              <Image
                src="/cody-kerns.png"
                alt="Kerns Marketing"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Download Your Blueprint
              </h2>
              <p className="text-white/50 mb-6">
                One last step — create your free account to access your Instagram Do&apos;s & Don&apos;ts 
                blueprint and start implementing these strategies today.
              </p>
              <a
                href="/create-account"
                className="inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black font-semibold py-4 px-8 rounded-xl transition-all group text-lg"
              >
                <Download className="w-6 h-6" />
                Download Blueprint
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-white/30 text-sm">NEXT STEPS</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Calendar Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Take It Further?
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Book a free 30-minute brand analysis with Cody and the team to discuss 
              your goals and create a custom strategy.
            </p>
          </div>
          
          {/* Calendly Embed */}
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
              Feel free to reach out to Cody and the team anytime.
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
