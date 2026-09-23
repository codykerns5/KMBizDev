'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Send } from 'lucide-react';

export default function CommentsSubmission() {
  const [postLink, setPostLink] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 15000);
      const response = await fetch('/api/comments/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({ postLink }),
      }).finally(() => clearTimeout(timer));

      if (response.ok) {
        setStatus('success');
        setPostLink('');
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-light text-white tracking-wide">
              Submit Post Link
            </h1>
          </div>
          
          <div className="relative">
            <input
              type="url"
              value={postLink}
              onChange={(e) => setPostLink(e.target.value)}
              placeholder="https://..."
              required
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-white/30 focus:bg-white/[0.07] outline-none text-white placeholder-white/30 transition-all backdrop-blur-sm"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting || !postLink}
            className="w-full bg-white hover:bg-white/90 disabled:bg-white/20 disabled:cursor-not-allowed text-black font-medium py-4 rounded-lg transition-all flex items-center justify-center gap-2 group"
          >
            {isSubmitting ? (
              'Submitting...'
            ) : (
              <>
                Submit
                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </>
            )}
          </button>

          {status === 'success' && (
            <div className="text-center">
              <p className="text-sm text-green-400 font-medium">
                ✓ Link submitted successfully
              </p>
            </div>
          )}
          
          {status === 'error' && (
            <div className="text-center">
              <p className="text-sm text-red-400 font-medium">
                Failed to submit. Please try again.
              </p>
            </div>
          )}
        </form>
      </div>
      </div>
    </div>
  );
}
