import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 mt-auto">
      <div className="max-w-3xl mx-auto px-6 flex flex-col items-center text-center gap-3">
        <p className="text-sm font-medium text-white">Kerns Marketing</p>
        <p className="text-xs text-white/60">
          <a href="mailto:support@kmbizdev.com" className="hover:text-white">
            support@kmbizdev.com
          </a>
          {" · "}
          <a href="tel:7868791131" className="hover:text-white">
            786-879-1131
          </a>
        </p>
        <Link
          href="/privacy-policy"
          className="text-xs text-white/60 hover:text-white transition"
        >
          Privacy Policy
        </Link>
        <p className="text-[11px] text-white/40 max-w-xl leading-relaxed">
          Contributor and sponsored placements only. Not affiliated with or
          endorsed by Yahoo Finance or any publication listed above.
        </p>
      </div>
    </footer>
  );
}
