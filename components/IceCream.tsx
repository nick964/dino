import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

export default function IceCream() {
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
            Satisfy your sweet tooth with our delicious soft serve, hand-dipped ice cream,
            and specialty sundaes!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Flavors Grid */}
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

            {/* Flavors Grid - Edit in siteConfig.ts */}
            <div className="grid grid-cols-2 gap-3">
              {siteConfig.flavors.map((flavor, index) => (
                <div
                  key={index}
                  className={`card p-4 bg-white border-2 ${
                    flavor.isSpecial
                      ? "border-[#e86a33]"
                      : "border-transparent hover:border-[#1a5f2a]"
                  }`}
                >
                  <h4 className="font-bold text-lg text-[#0f3d1a]">
                    {flavor.name}
                    {flavor.isSpecial && (
                      <span className="ml-2 inline-block animate-pulse">
                        ⭐
                      </span>
                    )}
                  </h4>
                  <p className="text-sm mt-1 text-[#666]">
                    {flavor.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Toppings Section */}
            <div className="mt-8">
              <h3 className="font-display text-xl font-bold text-[#0f3d1a] mb-4 flex items-center gap-2">
                <span aria-hidden="true">🍬</span>
                Toppings
              </h3>
              <div className="flex flex-wrap gap-2">
                {siteConfig.toppings.map((topping, index) => (
                  <span
                    key={index}
                    className="inline-block bg-white px-3 py-1.5 rounded-full text-sm font-medium text-[#2c2c2c] border border-[#d4cfc5] hover:border-[#1a5f2a] hover:bg-[#e8f5e9] transition-colors"
                  >
                    {topping}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Image + Fun Blurb Side */}
          <div className="space-y-6">
            {/* Featured Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={siteConfig.images.iceCream}
                alt="Jurassic Swirled ice cream shop entrance"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="font-display text-2xl font-bold">
                  {siteConfig.secondaryName}
                </p>
                <p className="text-white/90">Ice cream heaven awaits!</p>
              </div>
            </div>

            {/* Fun Facts Card */}
            <div className="card p-6 bg-white border-2 border-[#1a5f2a]">
              <h3 className="font-display text-xl font-bold mb-4 flex items-center gap-2 text-[#0f3d1a]">
                <span aria-hidden="true">🦕</span>
                Did You Know?
              </h3>
              <ul className="space-y-3 text-[#2c2c2c]">
                <li className="flex items-start gap-3">
                  <span className="text-[#1a5f2a] mt-1" aria-hidden="true">
                    ✓
                  </span>
                  <span>
                    Our soft serve is made fresh daily with premium ingredients
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1a5f2a] mt-1" aria-hidden="true">
                    ✓
                  </span>
                  <span>
                    Try our famous &quot;Dino Swirl&quot; - a mix of any two flavors!
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#1a5f2a] mt-1" aria-hidden="true">
                    ✓
                  </span>
                  <span>
                    Mini golf players get a special discount on treats
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
