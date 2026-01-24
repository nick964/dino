import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Hero() {
  const bannerPadding = siteConfig.seasonalBanner.show ? "pt-[140px]" : "pt-[72px]";

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${bannerPadding}`}
      aria-label="Welcome to Jurassic Mini Golf"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={siteConfig.images.hero.main}
          alt="Jurassic Mini Golf course with dinosaurs and waterfall"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-6 animate-fade-in-up">
          <div className="relative w-48 h-32 sm:w-56 sm:h-40 mx-auto bg-white/90 rounded-2xl p-4 shadow-xl">
            <Image
              src={siteConfig.images.logo}
              alt={`${siteConfig.businessName} logo`}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Main Heading - Single H1 for SEO */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg animate-fade-in-up">
          <span className="block">{siteConfig.businessName}</span>
          <span className="block text-[#f28b5c] text-3xl sm:text-4xl md:text-5xl mt-2">
            &amp; {siteConfig.secondaryName}
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          {siteConfig.tagline}
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Link
            href="#about"
            className="btn-primary text-lg px-8 py-4"
          >
            Explore the Adventure
          </Link>
          <Link
            href="#ice-cream"
            className="btn-secondary text-lg px-8 py-4"
          >
            See Our Flavors
          </Link>
        </div>

        {/* Location Badge */}
        <div
          className="mt-10 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-5 py-2 text-white animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-[#f28b5c]"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-semibold">
            {siteConfig.address.city}, {siteConfig.address.state}
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          href="#about"
          className="text-white/80 hover:text-white transition-colors"
          aria-label="Scroll to About section"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
