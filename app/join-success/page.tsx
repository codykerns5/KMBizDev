'use client';

import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function JoinSuccessPage() {
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
        <div className="text-center max-w-md">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Thanks for reaching out!
          </h1>
          <p className="text-white/60 mb-8">
            We&apos;ve received your information and will be in touch soon about opportunities to earn commissions, become an affiliate, or join our team.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
