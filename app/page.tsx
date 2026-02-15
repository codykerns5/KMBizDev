'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Video, Target, Megaphone, Users, Globe, Newspaper, Star, 
  ChevronDown, X, ExternalLink, Play, Award, Zap, Search,
  MessageCircle, Mail, Phone
} from 'lucide-react';

// KM Logo SVG Component - Kerns Marketing
const KMLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg viewBox="0 0 120 60" className={className} fill="currentColor">
    {/* K */}
    <path d="M10 5 L10 55 M10 30 L30 5 M10 30 L30 55" 
          stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    {/* M */}
    <path d="M45 55 L45 5 L67.5 35 L90 5 L90 55" 
          stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// YouTube icon
const YouTubeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

// Payment Modal Component
const PaymentModal = ({ isOpen, onClose, service, price }: { isOpen: boolean; onClose: () => void; service: string; price: string }) => {
  if (!isOpen) return null;
  
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8 max-w-md w-full"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{service}</h3>
            <p className="text-2xl font-bold text-white">{price}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition">
            <X className="w-5 h-5 text-white/60" />
          </button>
        </div>
        
        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <h4 className="font-semibold text-white mb-2">How to Purchase</h4>
            <ol className="text-sm text-white/70 space-y-2">
              <li>1. Click the payment link below</li>
              <li>2. Enter the amount: <span className="text-white font-semibold">{price}</span></li>
              <li>3. Complete payment with card</li>
              <li>4. We&apos;ll reach out within 24-48 hours to get started</li>
            </ol>
          </div>
          
          <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
            <p className="text-xs text-green-400">✓ Secure payment via Stripe</p>
          </div>
        </div>
        
        <a 
          href="https://buy.stripe.com/4gMaEX3PE8KpbCZ1ojbo43l"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition flex items-center justify-center gap-2"
        >
          Pay {price} <ExternalLink className="w-4 h-4" />
        </a>
        
        <p className="text-center text-xs text-white/40 mt-4">
          Questions? Email us anytime
        </p>
      </motion.div>
    </motion.div>
  );
};

// Partner Program Modal Component
const PartnerModal = ({ isOpen, onClose, program }: { 
  isOpen: boolean; 
  onClose: () => void; 
  program: 'enterprise' | 'brand' | null;
}) => {
  if (!isOpen || !program) return null;
  
  const programs = {
    enterprise: {
      name: 'Enterprise Partner',
      tagline: 'Complete business transformation',
      price: '$5,995/mo',
      pricing: [
        { term: 'Monthly', price: '$5,995.00', link: 'https://www.fanbasis.com/agency-checkout/kerns-marketing/Q0oN5' },
        { term: 'Quarterly', price: '$16,995.00', link: 'https://www.fanbasis.com/agency-checkout/kerns-marketing/W7xwo' },
        { term: 'Yearly', price: '$59,995.00', link: 'https://www.fanbasis.com/agency-checkout/kerns-marketing/Xoy7V' },
      ],
      features: [
        'Personal Branding development - Strategy, consulting, roadmapping & execution',
        'Boosted Engagement & Account Growth on Instagram',
        'Enterprise publications: Medical Daily, USA Today, Maxim, Yahoo Finance, Business Insider (Page 1 Google ranking)',
        'Mass Blast Digital Mailer - 50,000 targeted DMs per month',
        'Digital Door Knocking - 1,000 outbound DMs/month (500 from lead + 500 from company account)',
        'Fractional CMO account management team (USA based)',
        'Open Team Support Communication Channels',
        'Daily Marketing Insights via SMS',
        'Monthly 1-on-1 consultation with executive team',
      ],
      contract: '12 Month Contract',
    },
    brand: {
      name: 'Brand Partner',
      tagline: 'Essential growth package',
      price: '$2,995/mo',
      pricing: [
        { term: 'Monthly', price: '$2,995.00', link: 'https://www.fanbasis.com/agency-checkout/kerns-marketing/gLRkj' },
        { term: 'Quarterly', price: '$7,995.00', link: 'https://www.fanbasis.com/agency-checkout/kerns-marketing/mQ1E3' },
        { term: 'Yearly', price: '$29,995.00', link: 'https://www.fanbasis.com/agency-checkout/kerns-marketing/pQ4zy' },
      ],
      features: [
        'Personal Branding development - Strategy, consulting, roadmapping & execution',
        'Boosted Engagement & Account Growth on Instagram',
        'USA Today, Yahoo Finance & Business Insider Publication (Page 1 Google ranking)',
        'Digital Door Knocking - 500 outbound DMs/month to targeted prospects',
        'Fractional CMO account management team (USA based)',
        'Open Team Support Communication Channels',
        'Daily Marketing Insights via SMS',
        'Monthly 1-on-1 consultation with executive team',
      ],
      contract: '12 Month Contract',
    },
  };
  
  const p = programs[program];
  
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8 max-w-lg w-full my-8"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-xs text-white/50 uppercase tracking-wider">{p.contract}</span>
            <h3 className="text-2xl font-bold text-white">{p.name}</h3>
            <p className="text-white/60 text-sm">{p.tagline}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition">
            <X className="w-5 h-5 text-white/60" />
          </button>
        </div>
        
        {/* Features */}
        <div className="space-y-2 mb-6 max-h-[40vh] overflow-y-auto pr-2">
          {p.features.map((feature, i) => (
            <div key={i} className="flex gap-2 text-sm">
              <span className="text-green-400 shrink-0">✓</span>
              <span className="text-white/80">{feature}</span>
            </div>
          ))}
        </div>
        
        {/* Pricing Options */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          {p.pricing.map((tier, i) => (
            <a
              key={i}
              href={tier.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-xl text-center transition block ${i === 0 ? 'bg-white text-black hover:bg-white/90' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}
            >
              <div className={`text-[10px] uppercase tracking-wider mb-1 ${i === 0 ? 'text-black/60' : 'text-white/50'}`}>{tier.term}</div>
              <div className={`text-sm font-bold ${i === 0 ? 'text-black' : 'text-white'}`}>{tier.price}</div>
            </a>
          ))}
        </div>
        
        <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 mb-4">
          <p className="text-xs text-green-400 text-center">✓ Secure payment via Stripe · 24-48hr onboarding</p>
        </div>
        
        <a 
          href={p.pricing[0].link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition flex items-center justify-center gap-2"
        >
          Get Started <ExternalLink className="w-4 h-4" />
        </a>
      </motion.div>
    </motion.div>
  );
};

// Lead Capture Modal for high-ticket items
const LeadCaptureModal = ({ isOpen, onClose, service, price }: { isOpen: boolean; onClose: () => void; service: string; price: string }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });
  const [submitted, setSubmitted] = useState(false);
  
  if (!isOpen) return null;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    console.log('Lead captured:', { service, price, ...formData });
    setSubmitted(true);
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }} 
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8 max-w-md w-full"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{service}</h3>
            <p className="text-2xl font-bold text-white">{price}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-lg transition">
            <X className="w-5 h-5 text-white/60" />
          </button>
        </div>
        
        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-green-400" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Request Received!</h4>
            <p className="text-white/60 text-sm">We&apos;ll be in touch within 24 hours to discuss your campaign.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-white/30 outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-white/30 outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-white/30 outline-none"
            />
            <input
              type="text"
              placeholder="Company Name"
              value={formData.company}
              onChange={e => setFormData({...formData, company: e.target.value})}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:border-white/30 outline-none"
            />
            <button 
              type="submit"
              className="w-full py-3 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition"
            >
              Request Consultation
            </button>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
};

export default function KMMarketing() {
  const [paymentModal, setPaymentModal] = useState({ isOpen: false, service: '', price: '' });
  const [leadModal, setLeadModal] = useState({ isOpen: false, service: '', price: '' });
  const [partnerModal, setPartnerModal] = useState<{ isOpen: boolean; program: 'enterprise' | 'brand' | null }>({ isOpen: false, program: null });
  
  const openPayment = (service: string, price: string) => setPaymentModal({ isOpen: true, service, price });
  const closePayment = () => setPaymentModal({ isOpen: false, service: '', price: '' });
  
  const openLeadModal = (service: string, price: string) => setLeadModal({ isOpen: true, service, price });
  const closeLeadModal = () => setLeadModal({ isOpen: false, service: '', price: '' });
  
  const openPartnerModal = (program: 'enterprise' | 'brand') => setPartnerModal({ isOpen: true, program });
  const closePartnerModal = () => setPartnerModal({ isOpen: false, program: null });

  // Follower packages - USA followers
  const followerPackages = [
    { label: '1K', price: '$250', inquire: false },
    { label: '5K', price: '$1,000', inquire: false },
    { label: '10K', price: '$1,750', inquire: false },
    { label: '25K', price: '$3,000', inquire: false },
    { label: '50K', price: '$5,500', inquire: false },
    { label: '100K', price: '$9,000', inquire: false },
    { label: '100K+', price: 'INQUIRE', inquire: true },
  ];

  // YouTube packages - adjusted pricing
  const youtubePackages = [
    { views: '5K', likes: '500+', comments: '50+', price: '$200' },
    { views: '10K', likes: '1,000+', comments: '100+', price: '$300', popular: true },
    { views: '25K', likes: '2,500+', comments: '250+', price: '$500' },
    { views: '50K', likes: '5,000+', comments: '500+', price: '$1,000' },
    { views: '100K', likes: '10,000+', comments: '1,000+', price: '$1,500' },
  ];

  // Featured publications
  const featuredPublications = [
    'The US Times', 'Hustle Weekly', 'Moguls of Business', 
    'American Business Stars', 'New York Business Now', 'Breakthrough Magazine'
  ];

  // Premium publications with adjusted pricing
  const premiumPublications = [
    { name: 'MSN', price: '$999', badge: 'Major Outlet' },
    { name: 'Yahoo Finance', price: '$999', badge: 'Major Outlet' },
    { name: 'Business Insider', price: '$999', badge: 'Major Outlet' },
    { name: 'LA Weekly', price: '$1,500', badge: 'Premium' },
    { name: 'Hollywood Unlocked', price: '$2,000', badge: 'Premium' },
    { name: 'USA Today', price: '$4,999', rank: 'Ranks #1 on Google', badge: 'Top Pick' },
    { name: 'Maxim', price: '$5,999', rank: 'Ranks Page 1 on Google', badge: 'Premium' },
    { name: 'The Real Deal', price: '$15,000', rank: 'Ranks Page 1 on Google', badge: 'Elite' },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <KMLogo className="w-10 h-10 text-white" />
            <span className="text-lg font-bold tracking-tight">Kerns Marketing</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="text-sm text-white hover:text-white/90 transition"
            >
              Privacy Policy
            </Link>
            <a 
              href="https://buy.stripe.com/4gMaEX3PE8KpbCZ1ojbo43l"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-white text-black font-semibold text-sm rounded-full hover:bg-white/90 transition"
            >
              Pay Now
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <KMLogo className="w-20 h-20 mx-auto text-white mb-6" />
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4">
              The Ultimate
              <span className="block text-white/60">Marketing Menu</span>
            </h1>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              Everything you need to scale your business and brand online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PARTNER PROGRAMS */}
      <section id="programs" className="py-16 md:py-20 bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
              <Star className="w-4 h-4 text-white/70" />
              <span className="text-sm text-white/70 font-medium">Custom Programs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Full-Service Partner Programs</h2>
            <p className="text-base text-white/50 max-w-lg mx-auto">
              Done-for-you marketing packages with dedicated support and guaranteed results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Enterprise Partner */}
            <button
              onClick={() => openPartnerModal('enterprise')}
              className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.15] hover:border-white/30 transition text-left"
            >
              <span className="absolute -top-2.5 left-4 px-3 py-0.5 text-[9px] font-bold bg-white text-black rounded-full uppercase">Premium</span>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Enterprise Partner</h3>
                  <p className="text-sm text-white/50">Complete business transformation</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">$5,995</div>
                  <div className="text-xs text-white/40">/month</div>
                </div>
              </div>
              <div className="space-y-1.5 mb-4">
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <span className="text-green-400">✓</span> Enterprise publications (USA Today, Maxim +)
                </div>
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <span className="text-green-400">✓</span> 50K targeted DMs + 1K outbound/month
                </div>
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <span className="text-green-400">✓</span> Dedicated account manager & daily insights
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-white/40">12 Month Contract</span>
                <span className="text-sm text-white/70 group-hover:text-white transition">View Details →</span>
              </div>
            </button>

            {/* Brand Partner */}
            <button
              onClick={() => openPartnerModal('brand')}
              className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition text-left"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Brand Partner</h3>
                  <p className="text-sm text-white/50">Essential growth package</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">$2,995</div>
                  <div className="text-xs text-white/40">/month</div>
                </div>
              </div>
              <div className="space-y-1.5 mb-4">
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <span className="text-green-400">✓</span> USA Today, Yahoo Finance & Business Insider
                </div>
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <span className="text-green-400">✓</span> 500 targeted outbound DMs/month
                </div>
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <span className="text-green-400">✓</span> Monthly strategy calls & SMS insights
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-white/40">12 Month Contract</span>
                <span className="text-sm text-white/70 group-hover:text-white transition">View Details →</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* PRESS / PR */}
      <section id="press" className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
              <Newspaper className="w-4 h-4 text-white/70" />
              <span className="text-sm text-white/70 font-medium">Press & PR</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Get Featured in Top Publications</h2>
            <p className="text-base text-white/50 max-w-lg mx-auto">
              Establish credibility with articles in major business and entertainment outlets.
            </p>
          </div>

          {/* Premium Outlets */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-white/50" />
              Premium Outlets
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {premiumPublications.map((pub, i) => (
                <button
                  key={i}
                  onClick={() => openPayment(pub.name, pub.price)}
                  className="group relative p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/20 transition text-left"
                >
                  {pub.badge && (
                    <span className={`absolute -top-2 right-3 px-2 py-0.5 text-[9px] font-bold rounded-full ${
                      pub.badge === 'Top Pick' ? 'bg-white text-black' : 
                      pub.badge === 'Elite' ? 'bg-white/20 text-white' : 
                      'bg-white/10 text-white/70'
                    }`}>{pub.badge}</span>
                  )}
                  <div className="font-medium text-white mb-1">{pub.name}</div>
                  {pub.rank && <div className="text-[10px] text-white/40 mb-1">{pub.rank}</div>}
                  <div className="text-xl font-bold text-white">{pub.price}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Featured Publications */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-white/50" />
              Featured Publications <span className="text-sm font-normal text-white/40">$150 each</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {featuredPublications.map((pub, i) => (
                <button
                  key={i}
                  onClick={() => openPayment(pub, '$150')}
                  className="group p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/20 transition text-left"
                >
                  <div className="font-medium text-white text-sm mb-1">{pub}</div>
                  <div className="text-lg font-bold text-white">$150</div>
                </button>
              ))}
            </div>
          </div>

          {/* Google Knowledge Panel */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/10">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Google Knowledge Panel</h3>
                  <p className="text-sm text-white/50">Get your own branded panel on Google search results</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-2xl font-bold text-white">$2,500</div>
                <button 
                  onClick={() => openPayment('Google Knowledge Panel', '$2,500')}
                  className="px-6 py-2.5 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOLLOWERS */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
              <Users className="w-4 h-4 text-white/70" />
              <span className="text-sm text-white/70 font-medium">Social Growth</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Blow Up Your Following</h2>
            <p className="text-base text-white/50 max-w-lg mx-auto">
              High-quality USA followers to boost your social proof and credibility.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {followerPackages.map((pkg, i) => (
              <button
                key={i}
                onClick={() => pkg.inquire ? openLeadModal(`${pkg.label} USA Followers`, 'Inquire') : openPayment(`${pkg.label} USA Followers`, pkg.price)}
                className="group p-4 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/20 transition text-center"
              >
                <div className="text-xl font-bold text-white mb-1">{pkg.label}</div>
                <div className="text-xs text-white/50 mb-2">USA</div>
                <div className="text-lg font-bold text-white group-hover:text-white">{pkg.price}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* YOUTUBE PACKAGES */}
      <section className="py-16 md:py-20 bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
              <YouTubeIcon className="w-4 h-4 text-white/70" />
              <span className="text-sm text-white/70 font-medium">YouTube Packages</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Get Your Content Seen</h2>
            <p className="text-base text-white/50 max-w-lg mx-auto">
              Premium YouTube views, likes, and comments to boost your visibility.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {youtubePackages.map((pkg, i) => (
              <div key={i} className={`relative p-4 rounded-xl text-center ${pkg.popular ? 'bg-white/10 border-2 border-white/30' : 'bg-white/[0.02] border border-white/[0.08]'}`}>
                {pkg.popular && <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-2 py-0.5 text-[8px] font-bold bg-white text-black rounded-full">Popular</span>}
                <div className="text-xl font-bold text-white mb-2">{pkg.views} Views</div>
                <div className="text-[10px] text-white/50 mb-1">{pkg.likes} likes</div>
                <div className="text-[10px] text-white/50 mb-3">{pkg.comments} comments</div>
                <div className="text-lg font-bold text-white mb-3">{pkg.price}</div>
                <button onClick={() => openPayment(`YouTube ${pkg.views} Views`, pkg.price)} className={`w-full py-2 rounded-lg text-xs font-semibold transition ${pkg.popular ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white hover:text-black'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UGC / VIRAL DISTRIBUTION */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
              <Video className="w-4 h-4 text-white/70" />
              <span className="text-sm text-white/70 font-medium">Viral Distribution</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Make Your Content Go Viral</h2>
            <p className="text-base text-white/50 max-w-lg mx-auto">
              Content seeding and UGC distribution across hundreds of pages and creators.
            </p>
          </div>

          <div className="space-y-6">
            {/* Content Seeding */}
            <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-white/10"><Video className="w-5 h-5 text-white" /></div>
                <div>
                  <h3 className="text-lg font-bold text-white">Content Seeding / UGC Distribution</h3>
                  <p className="text-xs text-white/50">Your content distributed across hundreds of viral videos</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { price: '$7,500', views: '5M+ Views' },
                  { price: '$15,000', views: '10M+ Views', popular: true },
                  { price: '$30,000', views: '25M+ Views' }
                ].map((tier, i) => (
                  <div key={i} className={`relative p-4 rounded-xl text-center ${tier.popular ? 'bg-white/10 border-2 border-white/30' : 'bg-white/[0.02] border border-white/[0.06]'}`}>
                    {tier.popular && <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 text-[9px] font-bold bg-white text-black rounded-full">Popular</span>}
                    <div className="text-2xl font-bold text-white mb-1">{tier.price}</div>
                    <div className="text-lg font-semibold text-white/70">{tier.views}</div>
                    <button onClick={() => openPayment(`Content Seeding ${tier.price}`, tier.price)} className={`w-full mt-4 py-2 rounded-lg text-sm font-semibold transition ${tier.popular ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white hover:text-black'}`}>Get Started</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Logo/Brand Clipping */}
            <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-white/10"><Zap className="w-5 h-5 text-white" /></div>
                <div>
                  <h3 className="text-lg font-bold text-white">Logo / Brand Clipping</h3>
                  <p className="text-xs text-white/50">Your logo watermarked across hundreds of viral videos</p>
                </div>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { price: '$15,000', views: '10M+ Views' },
                  { price: '$30,000', views: '25M+ Views', popular: true },
                  { price: '$50,000', views: '50M+ Views' },
                  { price: '$100,000', views: '100M+ Views' }
                ].map((tier, i) => (
                  <div key={i} className={`relative p-4 rounded-xl text-center ${tier.popular ? 'bg-white/10 border-2 border-white/30' : 'bg-white/[0.02] border border-white/[0.06]'}`}>
                    {tier.popular && <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 text-[9px] font-bold bg-white text-black rounded-full">Popular</span>}
                    <div className="text-xl font-bold text-white mb-1">{tier.price}</div>
                    <div className="text-sm font-semibold text-white/70">{tier.views}</div>
                    <button onClick={() => openPayment(`Logo Clipping ${tier.price}`, tier.price)} className={`w-full mt-4 py-2 rounded-lg text-sm font-semibold transition ${tier.popular ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white hover:text-black'}`}>Get Started</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIRAL MARKETING / AD BUYING */}
      <section className="py-16 md:py-20 bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4">
              <Megaphone className="w-4 h-4 text-white/70" />
              <span className="text-sm text-white/70 font-medium">Premium Ad Buying</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Big Placements. Viral Moments.</h2>
            <p className="text-base text-white/50 max-w-2xl mx-auto">
              We buy big placements in bulk, create a viral narrative around you, and distribute it all timed and aggressively to create a viral moment.
            </p>
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-white/10"><Target className="w-5 h-5 text-white" /></div>
              <div>
                <h3 className="text-lg font-bold text-white">Where We Post You</h3>
                <p className="text-xs text-white/50">Major pages and viral accounts</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {['@wealth', '@worldstar', '@saycheese', '@hoodvine', '@hoodclips', '@bangerbuddy'].map((handle, i) => (
                <span key={i} className="px-3 py-1.5 text-sm bg-white/[0.05] border border-white/[0.1] rounded-full text-white/70">{handle}</span>
              ))}
              <span className="px-3 py-1.5 text-sm bg-white/10 border border-white/20 rounded-full text-white font-medium">+ unlimited more</span>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { price: '$35,000', placements: '15-20 major placements', highlight: 'Minimum' },
                { price: '$50,000', placements: '25-35 major placements', popular: true },
                { price: '$100,000', placements: '50+ major placements', highlight: 'Maximum Impact' },
              ].map((tier, i) => (
                <div key={i} className={`relative p-5 rounded-xl text-center ${tier.popular ? 'bg-white/10 border-2 border-white/30' : 'bg-white/[0.02] border border-white/[0.06]'}`}>
                  {tier.popular && <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 text-[9px] font-bold bg-white text-black rounded-full uppercase">Popular</span>}
                  {tier.highlight && !tier.popular && <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 text-[9px] font-bold bg-white/10 text-white/70 rounded-full uppercase">{tier.highlight}</span>}
                  <div className="text-2xl font-bold text-white mb-2">{tier.price}</div>
                  <div className="text-sm text-white/60 mb-4">{tier.placements}</div>
                  <button onClick={() => openPayment(`Ad Buying ${tier.price}`, tier.price)} className={`w-full py-2.5 rounded-lg text-sm font-semibold transition ${tier.popular ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-white hover:text-black'}`}>Get Started</button>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-center text-xs text-white/30">$35,000 minimum · Custom campaigns available for larger budgets</p>
        </div>
      </section>

      {/* HOW TO PURCHASE */}
      <section className="py-16 md:py-20 bg-[#0d0d0d]">
        <div className="max-w-3xl mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">How to Purchase</h2>
            <p className="text-base text-white/50">Simple and secure payment process</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { step: '1', title: 'Choose Your Service', desc: 'Select the marketing services that fit your goals' },
              { step: '2', title: 'Pay via Stripe', desc: 'Enter the amount and complete secure payment' },
              { step: '3', title: 'We Get to Work', desc: 'Our team reaches out within 24-48 hours' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 bg-white text-black font-bold text-xl rounded-full flex items-center justify-center mx-auto mb-4">{item.step}</div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a 
              href="https://buy.stripe.com/4gMaEX3PE8KpbCZ1ojbo43l"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 transition text-lg"
            >
              Pay Now <ExternalLink className="w-5 h-5" />
            </a>
            <p className="text-sm text-white/40 mt-4">Secure payment powered by Stripe</p>
          </div>
        </div>
      </section>

      {/* CUSTOM INQUIRIES */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need Something Custom?</h2>
          <p className="text-white/50 mb-8">
            Looking for a custom campaign or have specific requirements? Let&apos;s discuss.
          </p>
          <a 
            href="https://buy.stripe.com/4gMaEX3PE8KpbCZ1ojbo43l"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Modals */}
      <AnimatePresence>
        {paymentModal.isOpen && <PaymentModal {...paymentModal} onClose={closePayment} />}
      </AnimatePresence>
      <AnimatePresence>
        {leadModal.isOpen && <LeadCaptureModal {...leadModal} onClose={closeLeadModal} />}
      </AnimatePresence>
      <AnimatePresence>
        {partnerModal.isOpen && <PartnerModal isOpen={partnerModal.isOpen} program={partnerModal.program} onClose={closePartnerModal} />}
      </AnimatePresence>
      </main>
  );
}
