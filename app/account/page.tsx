'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import {
  Download,
  LogOut,
  Newspaper,
  ShoppingBag,
  Calendar,
  X,
  Sparkles,
  FileText,
} from 'lucide-react';

const COURSE_LINK = 'https://www.fanbasis.com/agency-checkout/kerns-marketing/k89QK';
const CALENDLY_LINK = 'https://calendly.com/kmbizdev/30min';

function UpsellPopup({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-[#111] border border-white/10 rounded-2xl max-w-lg w-full overflow-hidden">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-amber-400" />
              <h2 className="text-2xl font-bold text-white">Special Offer</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition text-white/60 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-white/70 mb-6">
            You&apos;re in! Before you dive in, take advantage of these exclusive offers:
          </p>

          {/* Instagram Growth Course */}
          <div className="mb-6 p-5 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">
              Instagram Growth Course
            </h3>
            <p className="text-white/60 text-sm mb-4">
              Full access to our proven system + Access to KM IG Comment Engagement Chat. Normally $999 — yours for just $99 today.
            </p>
            <a
              href={COURSE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-black font-semibold py-3 px-6 rounded-xl transition"
            >
              Get Access — $99
            </a>
          </div>

          {/* Free Call */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">
              Free 30-Minute Brand Analysis
            </h3>
            <p className="text-white/60 text-sm mb-4">
              Book a call with Cody and the team to discuss your goals and get a custom strategy.
            </p>
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-black font-semibold py-3 px-6 rounded-xl transition"
            >
              <Calendar className="w-5 h-5" />
              Schedule Free Call
            </a>
          </div>
        </div>

        <div className="px-8 pb-6">
          <button
            onClick={onClose}
            className="w-full py-3 text-white/50 hover:text-white text-sm transition"
          >
            No thanks, take me to my free blueprint
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AccountPage() {
  const router = useRouter();
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [showUpsell, setShowUpsell] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let supabase;
    try {
      supabase = createClient();
    } catch {
      setLoading(false);
      router.push('/login?redirectTo=/account');
      return;
    }

    supabase.auth.getUser().then(({ data: { user: u } }) => {
      if (u) {
        setUser({ email: u.email || '' });
        setShowUpsell(true);
      } else {
        router.push('/login?redirectTo=/account');
      }
      setLoading(false);
    });
  }, [router]);

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/');
    router.refresh();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin h-10 w-10 border-2 border-white/30 border-t-white rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {showUpsell && typeof document !== 'undefined' && createPortal(
        <UpsellPopup onClose={() => setShowUpsell(false)} />,
        document.body
      )}

      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-white font-semibold text-lg">
            Kerns Marketing
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="text-sm text-white hover:text-white/90 transition"
            >
              Privacy Policy
            </Link>
            <span className="text-white/50 text-sm hidden sm:inline">{user?.email}</span>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition"
            >
              <LogOut className="w-4 h-4" />
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Your Kerns Marketing Account
            </h1>
            <p className="text-white/50">Welcome back. Access your resources below.</p>
          </div>
          <button
            onClick={() => setShowUpsell(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium transition shrink-0"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            View Special Offers
          </button>
        </div>

        {/* Blueprint Download */}
        <div className="mb-12 p-8 rounded-2xl bg-white/5 border border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="p-4 rounded-xl bg-white/5">
              <FileText className="w-12 h-12 text-white/60" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white mb-2">
                Instagram Do&apos;s & Don&apos;ts Blueprint
              </h2>
              <p className="text-white/50 mb-4">
                Your free guide with the exact strategies to start monetizing your brand today.
              </p>
              <a
                href="/instagram-blueprint.pdf"
                download="Instagram Dos and Donts.pdf"
                className="inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black font-semibold py-3 px-6 rounded-xl transition"
              >
                <Download className="w-5 h-5" />
                Download Blueprint
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/#programs"
            className="block p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-white/20 transition group"
          >
            <ShoppingBag className="w-10 h-10 text-white/60 mb-4 group-hover:text-white transition" />
            <h3 className="text-lg font-semibold text-white mb-2">Core Programs</h3>
            <p className="text-white/50 text-sm">Enterprise & Brand partner programs</p>
          </Link>

          <Link
            href="/#press"
            className="block p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-white/20 transition group"
          >
            <Newspaper className="w-10 h-10 text-white/60 mb-4 group-hover:text-white transition" />
            <h3 className="text-lg font-semibold text-white mb-2">Press & Media</h3>
            <p className="text-white/50 text-sm">Featured publications & premium outlets</p>
          </Link>

          <Link
            href="/"
            className="block p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-white/20 transition group"
          >
            <ShoppingBag className="w-10 h-10 text-white/60 mb-4 group-hover:text-white transition" />
            <h3 className="text-lg font-semibold text-white mb-2">Full Service Menu</h3>
            <p className="text-white/50 text-sm">View all marketing services</p>
          </Link>
        </div>

        {/* Calendly CTA */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 text-center">
          <h3 className="text-xl font-semibold text-white mb-2">Need a custom strategy?</h3>
          <p className="text-white/50 mb-6">Book a free 30-minute brand analysis call.</p>
          <a
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-white/90 text-black font-semibold py-3 px-6 rounded-xl transition"
          >
            <Calendar className="w-5 h-5" />
            Schedule Call
          </a>
        </div>
      </main>
    </div>
  );
}
