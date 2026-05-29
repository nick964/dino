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

interface SeasonalBanner {
  show: boolean;
  message: string;
}

interface IceCreamImages {
  menu: string;
  bananaSplit: string;
  blueIceCream: string;
  mintChocolateChip: string;
  softServe: string;
  sundae: string;
}

export const siteConfig: {
  businessName: string;
  secondaryName: string;
  tertiaryName: string;
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
    logos: {
      golf: string;
      swirled: string;
      arcade: string;
    };
    hero: {
      main: string;
      secondary: string;
    };
    gallery: GalleryImage[];
    about: string;
    iceCream: IceCreamImages;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonical: string;
    ogImage: string;
  };
  seasonalBanner: SeasonalBanner;
} = {
  // ===================
  // BUSINESS INFORMATION
  // ===================
  businessName: "Jurassic Adventure Golf",
  secondaryName: "Jurassic Swirled",
  tertiaryName: "Jurassic Arcade",
  tagline:
    "Dinosaur-Themed Mini Golf, Ice Cream Shop, & Arcade in North Wildwood, NJ",
  description:
    "Experience prehistoric fun at Jurassic Adventure Golf, cool off with treats at Jurassic Swirled, and play on at Jurassic Arcade! Family-friendly adventure in North Wildwood, NJ!",

  // ===================
  // CONTACT INFORMATION
  // Update these with real values
  // ===================
  phone: "+16096001934",
  email: "jurassicadventuregolf@gmail.com",
  address: {
    street: "4th & New Jersey Ave",
    city: "North Wildwood",
    state: "NJ",
    zip: "08260",
    full: "4th & New Jersey Ave, North Wildwood, NJ 08260",
  },

  // Google Maps URL - update with actual location
  googleMapsUrl:
    "https://www.google.com/maps/place/Jurassic+Adventure+Golf/@39.0065802,-74.7985394,17z/data=!3m1!4b1!4m6!3m5!1s0x89c0a86ef1e5577b:0xb5566a8963c82919!8m2!3d39.0065802!4d-74.7959591!16s%2Fg%2F11cncyfwzx?entry=ttu&g_ep=EgoyMDI2MDExOS4wIKXMDSoASAFQAw%3D%3D",

  // ===================
  // SOCIAL MEDIA LINKS
  // Update with actual URLs
  // ===================
  social: {
    facebook: "https://www.facebook.com/profile.php?id=100036276467734",
    instagram: "https://instagram.com/jurassicadventuregolf",
    tiktok: "https://tiktok.com/@jurassicadventuregolf",
  },

  // ===================
  // HOURS OF OPERATION
  // Update seasonally as needed
  // ===================
  hours: [
    { days: "Golf", time: "10:00 AM – 11:00 PM (last tee 10:15 PM)" },
    { days: "Ice Cream", time: "6:00 PM – 11:00 PM" },
    { days: "Arcade", time: "10:00 AM – 10:00 PM" },
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
        "Perfect stop after a day at the beach. The ice cream was amazing!",
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
    logos: {
      golf: "/images/logo/jurassic-adventure-golf-logo.png",
      swirled: "/images/logo/jurassic-swirled-logo.jpg",
      arcade: "/images/logo/jurassic-arcade-logo.png",
    },
    hero: {
      main: "/images/hero/course-street-view-mammoth.jpg",
      secondary: "/images/hero/course-overview-waterfall-dinosaurs.jpg",
    },
    gallery: [
      {
        src: "/images/gallery/trex-statue-dusk-rainbow.jpg",
        alt: "Green T-Rex statue on the course at dusk with a rainbow behind it",
      },
      {
        src: "/images/gallery/trex-statue-visitors-daytime.png",
        alt: "Visitors posing with the towering green T-Rex statue on a sunny day",
      },
      {
        src: "/images/gallery/blue-velociraptor-statue.jpg",
        alt: "Blue velociraptor statue at the entrance of the mini golf course",
      },
      {
        src: "/images/gallery/family-photo-on-course.jpg",
        alt: "Family of five posing together on the mini golf course",
      },
      {
        src: "/images/gallery/mammoth-statue-flag-daytime.png",
        alt: "Woolly mammoth statue with an American flag at the course",
      },
      {
        src: "/images/gallery/sabertooth-statue-course.png",
        alt: "Sabertooth statue among the mini golf holes",
      },
      {
        src: "/images/gallery/course-aerial-overhead.png",
        alt: "Aerial overhead view of the full mini golf course layout",
      },
      {
        src: "/images/gallery/arcade-games-interior.jpg",
        alt: "Inside Jurassic Arcade with games and prize machines",
      },
      {
        src: "/images/gallery/ice-cream-cookie-sandwiches.jpg",
        alt: "Chocolate chip cookie ice cream sandwiches from Jurassic Swirled",
      },
      {
        src: "/images/gallery/water-ice-gelati-pretzel.jpg",
        alt: "Water ice and gelati cups with a soft pretzel at Jurassic Swirled",
      },
      {
        src: "/images/gallery/banana-split-sundae.jpg",
        alt: "Banana split sundae at the Jurassic Swirled counter",
      },
      {
        src: "/images/gallery/sundae-whipped-cream-cherry.png",
        alt: "Loaded sundae topped with whipped cream and a cherry",
      },
    ],
    about: "/images/misc/mammoth-statue-american-flag.jpg",
    iceCream: {
      menu: "/images/icecream/IceCreamMenu.png",
      bananaSplit: "/images/icecream/BananaSplitAndLogo.jpg",
      blueIceCream: "/images/icecream/WaterIce_Jurassic.png",
      mintChocolateChip: "/images/icecream/MintChocolateChip.jpg",
      softServe: "/images/icecream/SoftServeConeAndLogo.jpg",
      sundae: "/images/icecream/Sundae.jpg",
    },
  },

  // ===================
  // SEO & METADATA
  // ===================
  seo: {
    title: "Jurassic Adventure Golf, Swirled & Arcade | North Wildwood NJ",
    description:
      "Dinosaur-themed mini golf, ice cream, and arcade fun at Jurassic Adventure Golf, Jurassic Swirled & Jurassic Arcade in North Wildwood, NJ. Perfect family fun!",
    keywords: [
      "mini golf North Wildwood NJ",
      "dinosaur mini golf",
      "Wildwood arcade",
      "ice cream North Wildwood",
      "family activities North Wildwood",
      "Jurassic Adventure Golf",
      "Jurassic Swirled",
      "Jurassic Arcade",
      "things to do North Wildwood NJ",
    ],
    canonical: "https://www.jurassicadventuregolf.com/",
    ogImage: "/images/hero/course-street-view-mammoth.jpg",
  },

  // ===================
  // SEASONAL BANNER
  // Set show to true/false to display the banner
  // ===================
  seasonalBanner: {
    show: false,
    message: "Now open for the season! Come visit us in North Wildwood!",
  },
};

export type SiteConfig = typeof siteConfig;
