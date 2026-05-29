import { siteConfig } from "@/lib/siteConfig";

export default function JsonLd() {
  // Format hours for JSON-LD (schema.org format) - golf, open daily
  const openingHours = [
    "Mo 10:00-23:00",
    "Tu 10:00-23:00",
    "We 10:00-23:00",
    "Th 10:00-23:00",
    "Fr 10:00-23:00",
    "Sa 10:00-23:00",
    "Su 10:00-23:00",
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "EntertainmentBusiness",
    "@id": siteConfig.seo.canonical,
    name: `${siteConfig.businessName}, ${siteConfig.secondaryName} & ${siteConfig.tertiaryName}`,
    description: siteConfig.seo.description,
    url: siteConfig.seo.canonical,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      // Update these coordinates with actual location
      latitude: 38.9912,
      longitude: -74.8148,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "23:00",
      },
    ],
    openingHours: openingHours,
    priceRange: "$$",
    image: `${siteConfig.seo.canonical}${siteConfig.seo.ogImage}`,
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.tiktok,
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Activities",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mini Golf",
            description:
              "18-hole dinosaur-themed mini golf course with waterfalls and life-size dinosaur statues",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ice Cream",
            description:
              "Soft serve ice cream, sundaes, and specialty treats at Jurassic Swirled",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Arcade",
            description:
              "Arcade games and classic arcade action for all ages at Jurassic Arcade",
          },
        },
      ],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.businessName,
    url: siteConfig.seo.canonical,
    description: siteConfig.seo.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.businessName,
      url: siteConfig.seo.canonical,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
