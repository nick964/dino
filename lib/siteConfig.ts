/**
 * Site Configuration
 * ------------------
 * Edit this file to update business info, hours, flavors, testimonials, and more.
 * All content is centralized here for easy maintenance.
 */

// Types for site config
interface Flavor {
  name: string;
  description: string;
  isSpecial?: boolean;
}

interface Testimonial {
  quote: string;
  author: string;
  location: string;
  image: string;
}

interface HoursEntry {
  days: string;
  time: string;
}

interface GalleryImage {
  src: string;
  alt: string;
}

export const siteConfig: {
  businessName: string;
  secondaryName: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  googleMapsUrl: string;
  social: {
    facebook: string;
    instagram: string;
    tiktok: string;
  };
  hours: HoursEntry[];
  hoursNote: string;
  flavors: Flavor[];
  toppings: string[];
  testimonials: Testimonial[];
  images: {
    logo: string;
    hero: {
      main: string;
      secondary: string;
    };
    gallery: GalleryImage[];
    about: string;
    iceCream: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonical: string;
    ogImage: string;
  };
} = {
  // ===================
  // BUSINESS INFORMATION
  // ===================
  businessName: "Jurassic Mini Golf",
  secondaryName: "Jurassic Swirled",
  tagline: "Dinosaur-Themed Mini Golf & Ice Cream in Wildwood, NJ",
  description:
    "Experience prehistoric fun at Jurassic Mini Golf and cool off with delicious treats at Jurassic Swirled! Family-friendly adventure on the Wildwood boardwalk.",

  // ===================
  // CONTACT INFORMATION
  // Update these with real values
  // ===================
  phone: "+16096001934",
  email: "info@jurassicadventuregolf.com",
  address: {
    street: "300 New Jersey Ave",
    city: "Wildwood",
    state: "NJ",
    zip: "08260",
    full: "300 New Jersey Ave, Wildwood, NJ 08260",
  },

  // Google Maps URL - update with actual location
  googleMapsUrl:
    "https://www.google.com/maps/place/Jurassic+Adventure+Golf/@39.0065802,-74.7985394,17z/data=!3m1!4b1!4m6!3m5!1s0x89c0a86ef1e5577b:0xb5566a8963c82919!8m2!3d39.0065802!4d-74.7959591!16s%2Fg%2F11cncyfwzx?entry=ttu&g_ep=EgoyMDI2MDExOS4wIKXMDSoASAFQAw%3D%3D",

  // ===================
  // SOCIAL MEDIA LINKS
  // Update with actual URLs
  // ===================
  social: {
    facebook: "https://facebook.com/jurassicadventuregolf",
    instagram: "https://instagram.com/jurassicadventuregolf",
    tiktok: "https://tiktok.com/@jurassicadventuregolf",
  },

  // ===================
  // HOURS OF OPERATION
  // Update seasonally as needed
  // ===================
  hours: [
    { days: "Monday - Thursday", time: "12:00 PM - 10:00 PM" },
    { days: "Friday", time: "12:00 PM - 11:00 PM" },
    { days: "Saturday", time: "10:00 AM - 11:00 PM" },
    { days: "Sunday", time: "10:00 AM - 10:00 PM" },
  ],
  hoursNote: "Seasonal hours may vary. Weather permitting.",

  // ===================
  // ICE CREAM FLAVORS
  // Update flavors as menu changes
  // ===================
  flavors: [
    { name: "Vanilla", description: "Classic creamy vanilla soft serve" },
    { name: "Chocolate", description: "Rich chocolate soft serve" },
    { name: "Strawberry", description: "Sweet strawberry swirl" },
    { name: "Mint Chip", description: "Cool mint with chocolate chips" },
    { name: "Cookies & Cream", description: "Vanilla with Oreo cookie pieces" },
    { name: "Birthday Cake", description: "Festive sprinkle-filled favorite" },
    { name: "Salted Caramel", description: "Sweet and salty perfection" },
    {
      name: "Dino Special",
      description: "Seasonal rotating flavor - ask what's roaring today!",
      isSpecial: true,
    },
  ],

  toppings: [
    "Rainbow Sprinkles",
    "Chocolate Sprinkles",
    "Cookie Crumble",
    "Hot Fudge",
    "Caramel Sauce",
    "Whipped Cream",
    "Gummy Dinos",
    "Crushed Butterfinger",
  ],

  // ===================
  // TESTIMONIALS
  // Update with real customer feedback
  // ===================
  testimonials: [
    {
      quote:
        "Best mini golf in Wildwood! The dinosaurs are so realistic and the kids absolutely loved it. We'll be back every summer!",
      author: "Alex R.",
      location: "Philadelphia, PA",
      image: "/images/testimonials/icon-man-silhouette.jpg",
    },
    {
      quote:
        "The swirl was unreal - perfect boardwalk stop after a day at the beach. The Dino Special flavor was amazing!",
      author: "Jamie K.",
      location: "Cherry Hill, NJ",
      image: "/images/testimonials/icon-woman-silhouette.jpg",
    },
  ],

  // ===================
  // IMAGE PATHS
  // Update if image locations change
  // ===================
  images: {
    logo: "/images/logo/jurassic-adventure-golf-logo.png",
    hero: {
      main: "/images/hero/course-overview-waterfall-dinosaurs.jpg",
      secondary: "/images/hero/course-layout-aerial-style.jpg",
    },
    gallery: [
      {
        src: "/images/gallery/trex-statue-full-golf-sign-2.jpg",
        alt: "T-Rex statue with Jurassic Golf sign",
      },
      {
        src: "/images/gallery/velociraptor-statue-night-wide.jpg",
        alt: "Velociraptor statue illuminated at night",
      },
      {
        src: "/images/gallery/waterfall-rock-formation-dimetrodon.jpg",
        alt: "Waterfall and rock formation with Dimetrodon",
      },
      {
        src: "/images/gallery/red-rock-tunnel-hole.jpg",
        alt: "Red rock tunnel golf hole",
      },
      {
        src: "/images/gallery/velociraptor-statue-volcano-daytime.jpg",
        alt: "Velociraptor statue with volcano during the day",
      },
      {
        src: "/images/gallery/course-holes-rock-features.jpg",
        alt: "Course holes with rock features",
      },
      {
        src: "/images/gallery/mini-golf-overview-2.jpg",
        alt: "Mini golf course overview",
      },
      {
        src: "/images/gallery/holes-layout-overview.jpg",
        alt: "Overview of course hole layout",
      },
      {
        src: "/images/gallery/course-layout-view-2.jpg",
        alt: "Course layout wide view",
      },
      {
        src: "/images/gallery/visitor-putting-mammoth-background.jpg",
        alt: "Visitor putting with mammoth in background",
      },
      {
        src: "/images/gallery/group-photo-trex-background.jpg",
        alt: "Group photo with T-Rex in background",
      },
      {
        src: "/images/gallery/course-overview-golf-sign-waterfall.jpg",
        alt: "Course overview with golf sign and waterfall",
      },
    ],
    about: "/images/misc/mammoth-statue-american-flag.jpg",
    iceCream: "/images/misc/entrance-building-bridge-walkway.jpg",
  },

  // ===================
  // SEO & METADATA
  // ===================
  seo: {
    title: "Jurassic Mini Golf & Jurassic Swirled | Wildwood NJ",
    description:
      "Experience dinosaur-themed mini golf and delicious ice cream at Jurassic Mini Golf & Jurassic Swirled in Wildwood, NJ. Perfect family fun on the boardwalk!",
    keywords: [
      "mini golf Wildwood NJ",
      "dinosaur mini golf",
      "Wildwood boardwalk",
      "ice cream Wildwood",
      "family activities Wildwood",
      "Jurassic Mini Golf",
      "Jurassic Swirled",
      "things to do Wildwood NJ",
    ],
    canonical: "https://www.jurassicadventuregolf.com/",
    ogImage: "/images/hero/course-overview-waterfall-dinosaurs.jpg",
  },
};

export type SiteConfig = typeof siteConfig;
