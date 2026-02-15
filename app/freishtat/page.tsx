import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';

const CALENDLY_LINK = 'https://calendly.com/kmbizdev/30min';
const CALENDLY_EMBED = 'https://calendly.com/kmbizdev/30min?hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=ffffff';

export default function FreishtatPage() {
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

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        {/* Justin Freishtat Profile */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16 pb-12 border-b border-white/10">
          <div className="relative w-48 h-48 md:w-56 md:h-56 flex-shrink-0 rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/justin-freishtat.png"
              alt="Justin Freishtat"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
              Justin Freishtat
            </h2>
            <p className="text-white/50 text-lg font-medium mb-4">Vice President of Kerns Marketing</p>
            <p className="text-white/70 text-base leading-relaxed mb-4">
              Eight figures generated from social media alone. Hundreds of clients consulted.
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              He specializes in building magnetic brands and scalable marketing engines that turn consumers into customers. Through his branding and marketing programs, he teaches individuals how to position themselves, dominate attention, and build income-producing assets in the digital economy.
            </p>
          </div>
        </div>

        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Book Your Free
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
              Strategy Call
            </span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
            Schedule a free 30-minute brand analysis with Cody and the team. 
            Discuss your goals and get a custom strategy.
          </p>
          <a
            href={CALENDLY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white hover:bg-white/90 text-black font-semibold py-4 px-8 rounded-xl transition-all group"
          >
            <Calendar className="w-6 h-6" />
            Schedule Your Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Calendly Embed */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
          <iframe
            src={CALENDLY_EMBED}
            width="100%"
            height="700"
            frameBorder="0"
            title="Schedule a call"
            className="relative z-10"
          />
        </div>

        {/* Secondary CTA */}
        <div className="text-center mt-8">
          <p className="text-white/40 text-sm">
            Questions? Email us at{' '}
            <a
              href="mailto:support@kmbizdev.com"
              className="text-white/70 hover:text-white underline"
            >
              support@kmbizdev.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
