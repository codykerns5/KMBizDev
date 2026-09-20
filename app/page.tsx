'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const PAY_URL = 'https://buy.stripe.com/5kQ6oHgCq5ydcH34Avbo500';
const CALL_URL = 'https://calendly.com/kmbizdev/30min';
const SMS_URL =
  'sms:7868791131?body=Hi%2C%20I%20want%20the%20Yahoo%20Finance%20feature.%20Please%20call%20me.';

const FEATURES = [
  {
    outlet: 'Yahoo Finance',
    title: 'SafeSpace Global Expands AI Safety Solutions',
    name: 'SafeSpace Global',
    href: 'https://finance.yahoo.com/news/safespace-global-expands-ai-safety-225000743.html',
  },
  {
    outlet: 'Yahoo Finance',
    title: 'Brett Wible Announces Nationwide Growth',
    name: 'Brett Wible',
    href: 'https://finance.yahoo.com/news/brett-wible-announces-nationwide-growth-173000583.html',
  },
  {
    outlet: 'Yahoo Finance',
    title: 'Sean Callagy Launches Unblinded 2025 Initiative',
    name: 'Sean Callagy',
    href: 'https://finance.yahoo.com/news/sean-callagy-launches-unblinded-2025-234000864.html',
  },
];

const ALSO = [
  {
    outlet: 'USA Today',
    title: 'Brett Wible Wants Financial Education to Feel Less Out of Reach',
    name: 'Brett Wible',
    href: 'https://www.usatoday.com/story/special/contributor-content/2026/05/21/brett-wible-wants-financial-education-to-feel-less-out-of-reach/90198770007/',
  },
  {
    outlet: 'USA Today',
    title: 'Heather Lawrie Shepherd Redefining Real Estate With Heart in Houston',
    name: 'Heather Lawrie Shepherd',
    href: 'https://www.usatoday.com/story/special/contributor-content/2025/08/12/heather-lawrie-shepherd-redefining-real-estate-with-heart-in-houston/85631370007/',
  },
  {
    outlet: 'LA Weekly',
    title: 'Shift Crawl Is Redefining Community Connection and Creator Culture in Los Angeles',
    name: 'Shift Crawl',
    href: 'https://www.laweekly.com/shift-crawl-is-redefining-community-connection-and-creator-culture-in-los-angeles/',
  },
];

const FAQS = [
  { q: 'Who writes it?', a: 'Our team. You review and approve before publication.' },
  { q: 'How long?', a: '15–30 days typical. Guaranteed published within 30 days or refunded.' },
  { q: 'Does it stay online?', a: 'Yes, under normal circumstances. The outlet controls its own content long-term.' },
  {
    q: 'Can I skip the call?',
    a: 'Yes. Pay $895 now and we will email you an intake form. Book a call at $999 if you prefer to talk first.',
  },
  { q: 'Who is this for?', a: 'Any legitimate business owner with a story worth telling.' },
];

function Ctas({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex flex-col items-center ${compact ? 'gap-3' : 'gap-4'}`}>
      <a
        href={PAY_URL}
        className="w-full max-w-md inline-flex items-center justify-center rounded-full bg-white text-black font-semibold py-3.5 px-6 hover:bg-white/90 transition"
      >
        Pay Now — $895 <span className="ml-2 text-black/40 line-through font-medium">$999</span>
      </a>
      <p className="text-xs text-emerald-400">Skip the call · Save $104</p>
      <a
        href={CALL_URL}
        className="w-full max-w-md inline-flex items-center justify-center rounded-full border border-white/20 text-white font-medium py-3.5 px-6 hover:bg-white/5 transition"
      >
        Book a Call — $999
      </a>
      <a href={SMS_URL} className="text-sm text-white/50 hover:text-white">
        Or text 786-879-1131
      </a>
      <p className="text-xs text-white/40 max-w-md text-center leading-relaxed">
        We also offer other comparable publication options at the same price.{' '}
        <a href={CALL_URL} className="underline hover:text-white">
          Book a call
        </a>{' '}
        or{' '}
        <a href="mailto:support@kmbizdev.com" className="underline hover:text-white">
          email us
        </a>{' '}
        to view our full catalogue.
      </p>
    </div>
  );
}

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-black text-white">
      <section className="relative overflow-hidden px-6 pt-16 pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(88,28,135,0.35),_transparent_60%)]" />
        <div className="relative max-w-2xl mx-auto text-center">
          <p className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs text-white/70 mb-8">
            5,000+ clients since 2016
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            Your Business &amp; Personal Brand Featured on Yahoo Finance
          </h1>
          <p className="mt-5 text-white/60 text-base sm:text-lg leading-relaxed">
            We write your story and publish it as a contributor feature on Yahoo Finance — covering your business and personal brand. Prospects find it when they search your name.
          </p>

          <div className="mt-10 mx-auto max-w-sm rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-[11px] tracking-[0.18em] uppercase text-white/40">Pay now &amp; skip the call</p>
            <p className="mt-2 text-5xl font-semibold">
              $895 <span className="text-xl text-white/30 line-through font-medium">$999</span>
            </p>
            <p className="mt-2 text-sm text-white/50">one-time · published in 15–30 days</p>
            <p className="mt-3 text-sm text-white/50">Or book a call at $999</p>
            <p className="mt-3 text-sm text-emerald-400">Published within 30 days or your money back</p>
          </div>

          <div className="mt-8">
            <Ctas />
          </div>
          <p className="mt-6 text-[11px] text-white/35">
            Contributor placement only. Not affiliated with or endorsed by Yahoo Finance.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-white/10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">What you get</h2>
          <ul className="space-y-3 text-white/70">
            {[
              'Professionally written feature article about your business',
              'Contributor placement published on Yahoo Finance',
              'Intake handled by our team — you approve before it goes live',
              'Typical turnaround: 15–30 days',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-emerald-400">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-white/50 leading-relaxed">
            People search your name before they buy. A published feature on a recognized news site builds trust in a way a website or social profile cannot.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4 text-center">
            {[
              ['1', 'Pay or book'],
              ['2', 'We write it'],
              ['3', 'It goes live'],
            ].map(([n, label]) => (
              <div key={n} className="rounded-xl border border-white/10 py-5">
                <p className="text-2xl font-semibold">{n}</p>
                <p className="text-xs text-white/50 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-white/10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-center">Real client features we published</h2>
          <p className="text-center text-sm text-white/45 mt-2 mb-8">Live contributor articles — click to verify</p>
          <div className="space-y-3">
            {FEATURES.map((f) => (
              <a
                key={f.href}
                href={f.href}
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl border border-white/10 p-4 hover:border-white/25 transition"
              >
                <p className="text-[10px] tracking-[0.16em] uppercase text-white/40">{f.outlet} contributor</p>
                <p className="mt-1 font-medium">{f.title}</p>
                <p className="text-sm text-white/50">{f.name}</p>
              </a>
            ))}
          </div>
          <p className="text-center text-xs text-white/40 mt-8 mb-4">Also published on</p>
          <div className="space-y-3">
            {ALSO.map((f) => (
              <a
                key={f.href}
                href={f.href}
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl border border-white/10 p-4 hover:border-white/25 transition"
              >
                <p className="text-[10px] tracking-[0.16em] uppercase text-white/40">{f.outlet} contributor</p>
                <p className="mt-1 font-medium">{f.title}</p>
                <p className="text-sm text-white/50">{f.name}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-white/10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">Quick answers</h2>
          <div className="divide-y divide-white/10 border border-white/10 rounded-2xl">
            {FAQS.map((item, i) => (
              <button
                key={item.q}
                type="button"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left px-5 py-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-medium">{item.q}</span>
                  <ChevronDown className={`w-4 h-4 text-white/40 transition ${openFaq === i ? 'rotate-180' : ''}`} />
                </div>
                {openFaq === i && <p className="mt-2 text-sm text-white/55 leading-relaxed">{item.a}</p>}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-white/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold">Get your feature published</h2>
          <p className="mt-3 text-white/55">Pay now to skip the call, book a call, or send your info below.</p>
          <div className="mt-8">
            <Ctas compact />
          </div>
          <p className="mt-10 mb-4 text-sm text-white/40">or send your info</p>
          <form
            action="https://formsubmit.co/support@kmbizdev.com"
            method="POST"
            className="max-w-md mx-auto space-y-3 text-left"
          >
            <input type="hidden" name="_subject" value="Yahoo Finance feature inquiry" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
            <input name="name" required placeholder="Name" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/30" />
            <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/30" />
            <input name="phone" type="tel" required placeholder="Phone" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/30" />
            <input name="business" required placeholder="Business name" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/30" />
            <button type="submit" className="w-full rounded-full bg-white text-black font-semibold py-3.5 hover:bg-white/90">
              Send my info
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
