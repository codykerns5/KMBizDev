'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Briefcase } from 'lucide-react';

const formAction = 'https://formsubmit.co/support@kmbizdev.com';
const thankYouUrl = 'https://www.kmbizdev.com/join-success';

export default function JoinPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <header className="border-b border-white/10 px-6 py-4 flex-shrink-0">
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

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-lg">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Briefcase className="w-4 h-4 text-white/70" />
              <span className="text-sm text-white/70 font-medium">Join Our Team</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Looking to earn sales commissions, become an affiliate, or work for us?
            </h1>
            <p className="text-white/50 text-lg">
              Submit your details below and we&apos;ll be in touch.
            </p>
          </div>

          <form
            action={formAction}
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <input type="hidden" name="_next" value={thankYouUrl} />
            <input type="hidden" name="_subject" value="New Hire / Affiliate Inquiry - kmbizdev.com" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_url" value="https://www.kmbizdev.com/join" />

            <div className="space-y-2">
              <label className="text-white/70 text-sm font-medium">Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                required
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-white/30 focus:bg-white/[0.07] outline-none text-white placeholder-white/30 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-white/70 text-sm font-medium">Email *</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-white/30 focus:bg-white/[0.07] outline-none text-white placeholder-white/30 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-white/70 text-sm font-medium">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                placeholder="(555) 123-4567"
                required
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-white/30 focus:bg-white/[0.07] outline-none text-white placeholder-white/30 transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white hover:bg-white/90 disabled:bg-white/20 disabled:cursor-not-allowed text-black font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-3 group"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Submitting...
                </span>
              ) : (
                <>
                  Submit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-white/40 text-sm mt-6">
            <Link href="/" className="hover:text-white/60 transition">
              ← Back to home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
