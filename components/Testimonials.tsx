import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section bg-gradient-to-br from-[#0f3d1a] via-[#1a5f2a] to-[#0f3d1a]"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          What Our Guests Say
        </h2>
        <p className="text-lg text-center text-[#faf6f0] max-w-xl mx-auto mb-12">
          Don&apos;t just take our word for it - hear from families who&apos;ve experienced
          the prehistoric fun!
        </p>

        {/* Testimonials Grid - Edit testimonials in siteConfig.ts */}
        <div className="grid md:grid-cols-2 gap-8">
          {siteConfig.testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="card p-8 bg-white/95 backdrop-blur-sm relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-[#e86a33] rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </span>
              </div>

              {/* Quote */}
              <blockquote className="mb-6 mt-4">
                <p className="text-lg text-[#2c2c2c] italic leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
              </blockquote>

              {/* Author */}
              <footer className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-3 border-[#e8f5e9]">
                  <Image
                    src={testimonial.image}
                    alt={`Photo of ${testimonial.author}`}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <cite className="font-bold text-[#0f3d1a] not-italic">
                    {testimonial.author}
                  </cite>
                  <p className="text-sm text-[#666]">{testimonial.location}</p>
                </div>
              </footer>

              {/* Star Rating */}
              <div
                className="flex gap-1 mt-4"
                aria-label="5 out of 5 stars"
                role="img"
              >
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#e86a33]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-white/90 text-lg mb-4">
            Had a great experience? We&apos;d love to hear about it!
          </p>
          <a
            href="#contact"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Share Your Story
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
