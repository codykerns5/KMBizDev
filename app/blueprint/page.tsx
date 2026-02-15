'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Instagram } from 'lucide-react';

// VSL video - Dropbox (raw=1 for direct playback)
const VSL_VIDEO_URL = 'https://www.dropbox.com/scl/fo/kztg9du27bnq7xq10nl6w/APQMMKjEU3vFHWv-Hm39HEM/VSL%20for%20Cody.MP4?rlkey=7pihuwlrc8z6p58qimc7js3ye&st=dhl5n2t9&raw=1';

export default function BlueprintPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Force video to play when page loads (must be muted for autoplay to work in browsers)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const playVideo = () => {
      video.muted = true; // Required for autoplay
      video.play().catch(() => {}); // Ignore if blocked
    };
    playVideo();
    video.addEventListener('loadeddata', playVideo);
    video.addEventListener('canplay', playVideo);
    return () => {
      video.removeEventListener('loadeddata', playVideo);
      video.removeEventListener('canplay', playVideo);
    };
  }, []);

  // Unmute video on first user click (browsers allow unmute only after user gesture)
  const handleUnmute = () => {
    if (!isMuted) return;
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      setIsMuted(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form || isSubmitting) return;
    setIsSubmitting(true);

    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value ?? '';
    const nameParts = name.trim().split(/\s+/);
    const firstName = nameParts[0] ?? '';
    const lastName = nameParts.slice(1).join(' ') ?? '';
    const rawPhone = (form.elements.namedItem('phone') as HTMLInputElement)?.value ?? '';

    const cleanedPhone = rawPhone.replace(/\D/g, '');
    // Always add +1 (US) to ALL submissions for GHL country code recognition
    const digits =
      cleanedPhone.length === 11 && cleanedPhone.startsWith('1')
        ? cleanedPhone.slice(1)
        : cleanedPhone;
    const formattedPhone = digits ? `+1${digits}` : null;

    const formData = {
      firstName,
      lastName,
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value ?? '',
      phone: formattedPhone,
      instagram: (form.elements.namedItem('instagram') as HTMLInputElement)?.value ?? '',
      industry: (form.elements.namedItem('industry') as HTMLInputElement)?.value ?? '',
    };

    try {
      const res = await fetch('/api/blueprint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        cache: 'no-store',
      });
      if (!res.ok) {
        console.error('[Blueprint] API returned', res.status, await res.text());
      }
    } catch (err) {
      console.error('[Blueprint] API call failed:', err);
    } finally {
      form.submit();
    }
  };

  return (
    <div className="min-h-screen bg-black" onClick={handleUnmute}>
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
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - VSL Video & Branding */}
        <div className="lg:w-1/2 relative flex items-center justify-center p-8 lg:p-16">
          <div className="relative z-10 text-center lg:text-left max-w-lg w-full">
            {/* Video title */}
            <p className="text-white font-bold text-xl md:text-2xl lg:text-3xl mb-6">
              Founder Cody Kerns Shares The 3 Keys to Building a Successful Brand
            </p>
            
            {/* VSL Video - click anywhere on page to unmute */}
            <div className="relative w-full aspect-video mx-auto lg:mx-0 mb-8 rounded-2xl overflow-hidden bg-black">
              {isMuted && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 pointer-events-none">
                  <span className="px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
                    Click to unmute
                  </span>
                </div>
              )}
              <video
                ref={videoRef}
                src={VSL_VIDEO_URL}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                controls
                className="w-full h-full object-contain"
                poster="/og-blueprint.png"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            
            <a
              href="#brand-analysis-form"
              className="block w-full text-center py-4 px-6 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition mb-6"
            >
              TAKE ME TO MY FREE BLUEPRINT DOWNLOAD & SCHEDULE MY BRAND ANALYSIS CALL
            </a>
            
            <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 mt-6">
              What&apos;s inside our FREE 30 Min Brand Analysis Call & Blueprint Download?
            </h2>
            <ul className="space-y-2 text-white/60 text-base">
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-1">•</span>
                <span>Frameworks that transform Instagram from content into conversion — trusted by 5,000+ clients since 2016.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-white/40 mt-1">•</span>
                <span>The exact growth and monetization architecture used to scale YOUR authority, audience, and income on Instagram.</span>
              </li>
            </ul>
          </div>
          
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
        </div>
        
        {/* Right Side - Form */}
        <div id="brand-analysis-form" className="lg:w-1/2 flex items-center justify-center p-8 lg:p-16 scroll-mt-8">
          <div className="w-full max-w-md">
            <form
              ref={formRef}
              action="https://formsubmit.co/support@kmbizdev.com"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="_next" value="https://www.kmbizdev.com/thankyou" />
              <input type="hidden" name="_subject" value="Blueprint Lead - kmbizdev.com" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              {/* Header */}
              <div className="text-center lg:text-left mb-10">
                <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
                  GET YOUR FREE<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                    BLUEPRINT
                  </span>
                </h1>
                <p className="text-white/50">
                  Enter your details below for instant access
                </p>
              </div>
              
              {/* Name */}
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
              
              {/* Email */}
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
              
              {/* Phone */}
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
              
              {/* Instagram */}
              <div className="space-y-2">
                <label className="text-white/70 text-sm font-medium">Instagram Handle *</label>
                <div className="relative">
                  <Instagram className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                  <input
                    type="text"
                    name="instagram"
                    placeholder="@yourusername"
                    required
                    className="w-full pl-12 pr-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-white/30 focus:bg-white/[0.07] outline-none text-white placeholder-white/30 transition-all"
                  />
                </div>
              </div>
              
              {/* Industry/Title */}
              <div className="space-y-2">
                <label className="text-white/70 text-sm font-medium">Industry/Title *</label>
                <input
                  type="text"
                  name="industry"
                  placeholder="e.g. Real Estate Agent, Fitness Coach, Artist"
                  required
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-white/30 focus:bg-white/[0.07] outline-none text-white placeholder-white/30 transition-all"
                />
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white hover:bg-white/90 disabled:bg-white/20 disabled:cursor-not-allowed text-black font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-3 group mt-8"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <>
                    Get Instant Access
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              
              <p className="text-white/30 text-xs text-center pt-4">
                By submitting, you agree to receive marketing communications.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
