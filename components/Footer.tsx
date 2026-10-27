import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-6 border-t border-white/10 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white">
          © {new Date().getFullYear()} Kerns Marketing. All rights reserved.
        </p>
        <Link
          href="/privacy-policy"
          className="text-xs text-white hover:text-white/90 transition"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
