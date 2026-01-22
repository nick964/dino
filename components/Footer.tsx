import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#0f3d1a] text-white py-8"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-white/80">
              &copy; {currentYear} {siteConfig.businessName} &amp;{" "}
              {siteConfig.secondaryName}. All rights reserved.
            </p>
            <p className="text-white/60 text-sm mt-1">
              {siteConfig.address.city}, {siteConfig.address.state}
            </p>
          </div>

          {/* Back to Top */}
          <Link
            href="#home"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group"
          >
            <span>Back to Top</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 group-hover:-translate-y-1 transition-transform"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-4 text-sm">
              <li>
                <Link
                  href="#about"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#ice-cream"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Ice Cream
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Decorative Dino */}
        <div className="mt-6 text-center">
          <span className="text-2xl" aria-hidden="true">
            🦖
          </span>
        </div>
      </div>
    </footer>
  );
}
