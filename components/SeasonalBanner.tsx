import { siteConfig } from "@/lib/siteConfig";

export default function SeasonalBanner() {
  if (!siteConfig.seasonalBanner.show) {
    return null;
  }

  return (
    <div className="fixed top-[72px] left-0 right-0 z-40 w-full bg-gradient-to-r from-[#f28b5c] via-[#ff6b6b] to-[#f28b5c] py-4 px-4">
      <p className="text-center text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white drop-shadow-md animate-pulse">
        {siteConfig.seasonalBanner.message}
      </p>
    </div>
  );
}
