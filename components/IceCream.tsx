"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

export default function IceCream() {
  const [showMenuLightbox, setShowMenuLightbox] = useState(false);

  const openLightbox = useCallback(() => {
    setShowMenuLightbox(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setShowMenuLightbox(false);
    document.body.style.overflow = "";
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    },
    [closeLightbox]
  );

  const dessertTypes = [
    {
      name: "Hand Dipped Ice Cream",
      tagline: "Scooped to Perfection",
      description:
        "Classic hand-dipped ice cream in a variety of delicious flavors. Each scoop is generously portioned and served in a cone or cup.",
      image: siteConfig.images.iceCream.mintChocolateChip,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C9.24 2 7 4.24 7 7c0 1.53.69 2.91 1.78 3.83L8 22h8l-.78-11.17C16.31 9.91 17 8.53 17 7c0-2.76-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" />
        </svg>
      ),
    },
    {
      name: "Soft Serve",
      tagline: "Swirled Fresh Daily",
      description:
        "Creamy, dreamy soft serve made fresh every day. Try our famous Dino Swirl with any two flavors twisted together!",
      image: siteConfig.images.iceCream.softServe,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2c-2.5 0-4.5 1.5-5.4 3.6C5.6 5.3 4.5 4.5 3 4.5c-.8 0-1.5.7-1.5 1.5 0 1.1.9 2 2 2h.3c-.2.6-.3 1.3-.3 2 0 2.8 2.2 5 5 5h7c2.8 0 5-2.2 5-5 0-.7-.1-1.4-.3-2h.3c1.1 0 2-.9 2-2 0-.8-.7-1.5-1.5-1.5-1.5 0-2.6.8-3.6 2.1-.9-2.1-2.9-3.6-5.4-3.6zM9 17l1 5h4l1-5H9z" />
        </svg>
      ),
    },
    {
      name: "Water Ice",
      tagline: "Cool & Refreshing",
      description:
        "Beat the boardwalk heat with our refreshing water ice. Available in a rainbow of fruity flavors that hit the spot on a hot summer day!",
      image: siteConfig.images.iceCream.blueIceCream,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM3 21.5h8v-2H3v2z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="ice-cream"
      className="section bg-gradient-to-b from-[#e8f5e9] to-white"
      aria-labelledby="ice-cream-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#e86a33] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            Cool Down After Your Round
          </span>
          <h2 id="ice-cream-heading" className="section-title">
            {siteConfig.secondaryName}
          </h2>
          <p className="section-subtitle">
            Three ways to chill out! Choose from Hand Dipped Ice Cream, creamy
            Soft Serve, or refreshing Water Ice.
          </p>
        </div>

        {/* Three Dessert Types */}
        <div className="mb-16">
          <h3 className="font-display text-2xl md:text-3xl font-bold text-[#0f3d1a] text-center mb-8">
            Pick Your Perfect Treat
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {dessertTypes.map((dessert, index) => (
              <div
                key={index}
                className="group card bg-white overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={dessert.image}
                    alt={dessert.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-[#e86a33] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {dessert.tagline}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 bg-[#1a5f2a] rounded-full text-white">
                      {dessert.icon}
                    </span>
                    <h4 className="font-display text-xl font-bold text-[#0f3d1a]">
                      {dessert.name}
                    </h4>
                  </div>
                  <p className="text-[#666]">{dessert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Two Column: Flavors/Toppings + Gallery */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Our Flavors - Menu Image */}
          <div>
            <h3 className="font-display text-2xl font-bold text-[#0f3d1a] mb-6 flex items-center gap-3">
              <span
                className="inline-flex items-center justify-center w-10 h-10 bg-[#e86a33] rounded-full"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C9.24 2 7 4.24 7 7c0 1.53.69 2.91 1.78 3.83L8 22h8l-.78-11.17C16.31 9.91 17 8.53 17 7c0-2.76-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" />
                </svg>
              </span>
              Our Flavors
            </h3>

            <button
              onClick={openLightbox}
              className="group relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-xl cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-[#e86a33] focus-visible:ring-offset-2"
              aria-label="View full menu"
            >
              <Image
                src={siteConfig.images.iceCream.menu}
                alt="Jurassic Swirled Ice Cream Menu - Hand Dipped, Soft Serve, and Water Ice options"
                fill
                className="object-contain bg-white"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#0f3d1a]/0 group-hover:bg-[#0f3d1a]/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </span>
              </div>
            </button>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={siteConfig.images.iceCream.bananaSplit}
                alt="Delicious banana split sundae"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={siteConfig.images.iceCream.sundae}
                alt="Ice cream sundae with toppings"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Menu Lightbox Modal */}
      {showMenuLightbox && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
          aria-label="Menu lightbox"
          tabIndex={-1}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-[#f28b5c] transition-colors p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e86a33]"
              aria-label="Close lightbox"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image */}
            <div className="relative w-[85vw] h-[75vh] max-w-5xl">
              <Image
                src={siteConfig.images.iceCream.menu}
                alt="Jurassic Swirled Ice Cream Menu"
                fill
                className="object-contain"
                sizes="85vw"
                priority
              />
            </div>

            {/* Caption */}
            <p className="text-white text-center mt-4 text-lg">
              Jurassic Swirled Menu
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
