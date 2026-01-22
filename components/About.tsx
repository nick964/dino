import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function About() {
  return (
    <section
      id="about"
      className="section bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 id="about-heading" className="section-title">
          About Our Adventure
        </h2>
        <p className="section-subtitle">
          Step back in time for a prehistoric mini golf experience the whole family will love
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-6">
            {/* About Text - Edit this content as needed */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-[#2c2c2c] leading-relaxed">
                Welcome to <strong>Jurassic Mini Golf</strong>, Wildwood&apos;s premier
                dinosaur-themed mini golf destination! Our 18-hole course takes you on an
                incredible journey through the prehistoric era, featuring life-size dinosaur
                statues, roaring waterfalls, volcanic rock formations, and lush tropical landscaping.
              </p>
              <p className="text-lg text-[#2c2c2c] leading-relaxed">
                After your round, cool down at <strong>Jurassic Swirled</strong>, our attached
                ice cream shop serving delicious soft serve, sundaes, and specialty treats.
                It&apos;s the perfect way to end your prehistoric adventure!
              </p>
              <p className="text-lg text-[#2c2c2c] leading-relaxed">
                Whether you&apos;re a mini golf pro or playing for the first time, our course
                offers fun challenges for all ages and skill levels. Come create unforgettable
                memories with your family and friends on the Wildwood boardwalk!
              </p>
            </div>

            {/* Get Directions Link */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
                Get Directions
              </a>
              <Link
                href="#contact"
                className="btn-outline inline-flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Contact Us
              </Link>
            </div>
          </div>

          {/* Image + Hours Card Side */}
          <div className="space-y-6">
            {/* Featured Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={siteConfig.images.about}
                alt="Mammoth statue at Jurassic Mini Golf with American flag"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Hours Card */}
            <div className="card p-6">
              <h3 className="font-display text-xl font-bold text-[#0f3d1a] mb-4 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#e86a33]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                Hours of Operation
              </h3>

              {/* Hours Table */}
              <table className="w-full" role="table" aria-label="Business hours">
                <tbody>
                  {siteConfig.hours.map((schedule, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#d4cfc5] last:border-0"
                    >
                      <td className="py-2.5 font-semibold text-[#2c2c2c]">
                        {schedule.days}
                      </td>
                      <td className="py-2.5 text-right text-[#1a5f2a] font-medium">
                        {schedule.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Hours Note */}
              <p className="mt-4 text-sm text-[#666] italic flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                {siteConfig.hoursNote}
              </p>

              {/* Address */}
              <div className="mt-4 pt-4 border-t border-[#d4cfc5]">
                <address className="not-italic text-[#2c2c2c]">
                  <strong className="text-[#0f3d1a]">Location:</strong>
                  <br />
                  {siteConfig.address.full}
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
